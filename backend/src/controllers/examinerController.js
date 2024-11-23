
import bcrypt from "bcryptjs"
import Examiner from "../models/examinerModel.js"
import { generateTokenAndSetCookieForExaminer } from "../utils/generateTokenAndSetCookie.js"
import Contract from "../models/contractModel.js"
import Service from "../models/serviceModel.js"

export const ExaminerSignup = async (req, res) => {
    try {
        
        const {name, email, password, phone} = req.body
        // console.log("name: ", name)
        if(!name || !email|| !password || !phone ){
            return res.status(400).json({
                error: "Please enter all required fields"
            })
        }

        const examiner = await Examiner.findOne({ email })
        if(examiner){
            return res.status(400).json({error: "Examiner already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        const newExaminer = await Examiner ({
            name,
            email,
            password: hash,
            phone,
        })

        await newExaminer.save();

        if(newExaminer){
            const token = generateTokenAndSetCookieForExaminer({
                _id: newExaminer._id,
                examinerName: newExaminer.name
            }, res)
    
            return res.status(201).json({
                _id: newExaminer._id,
                name: newExaminer.name,
                email: newExaminer.email,
                phone: newExaminer.phone,
                token: token
            })
        } else{
            res.status(400).json({ error: "Invalid examiner data" });
        }

    } catch (error) {
        console.log("Error in Examiner signup",error.message);
        return res.status(500).json({ error: error.message });
    }
}


export const ExaminerLogin = async (req, res) =>{
    try {
        const {email, password} = req.body

        const examiner = await Examiner.findOne({ email })
        const isCorrectPassword = bcrypt.compareSync(password, examiner?.password || "")
        if(!examiner ||  !isCorrectPassword){
            return res.status(400).json({
                error: "Invalid password or email"
            })
        }

        const token = generateTokenAndSetCookieForExaminer({
            _id: examiner._id,
            examinerName: examiner.name
        }, res);

        return res.status(200).json({
            _id: examiner._id,
            name: examiner.name,
            email: examiner.email,
            phone: examiner.phone,
            token: token
        })

    } catch (error) {
        console.log("Error in Examiner login",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getSpecificExaminer = async(req, res) =>{
    const id = req.params.examinerId
    try {
        let examiner
        examiner = await Examiner.findOne({_id: id}).select("-password")

        if(!examiner) return res.status(400).json({ error: "Examiner not found"})
        
        return res.status(200).json(examiner)


    } catch (error) {
        console.log("Error in Get Specific Examiner Information",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const ExaminerLogout = async (req, res) =>{
    try {
        res.cookie("jwt-cleaning-examiner", "", {maxAge: 1}); // first approach

        // res.clearCookie("jwt-threads"); => second approach
        return res.status(200).json({
            message: "Examiner logged out successfully"
        })
    } catch (error) {
        console.log("Error in Examiner logout",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getContractsByExaminer = async (req, res) =>{
    try {
        const examinerId = req.examiner._id;
        let contracts = await Contract.find({
            participants:{$all: [examinerId]}
        })

        if(!contracts){
            return res.status(400).json({ error: "Contract not found. So can not get the Service."})
        }

        // Fetch services for each contract
        // const services = await Promise.all(
        //     contracts.map(async (contract) => {
        //     const service = await Service.findById(contract.ServiceID);
        //     return service;
        //     })
        // );
  
        // Return all contracts as a response
        return res.status(200).json(contracts);

    } catch (error) {
        console.log("Error in Examiner Get Contract",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const DeleteExaminerInContract = async (req, res) =>{
    const examinerId = req.examiner._id;
    try {
        const {ContractId} = req.params;
        let contracts = await Contract.findById(ContractId)

        if(!contracts){
            return res.status(400).json({ error: "Contract not found."})
        }

        contracts.participants.pull(examinerId)
        contracts.save()
        return res.status(200).json(contracts);

    } catch (error) {
        console.log("Error in delete examiner in contract",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getExaminerThroughServiceName = async(req, res) =>{
    const {ServiceName} = req.params
    try {
        const service = await Service.findOne({ServiceName: ServiceName})
        const examiner = await Examiner.findOne({_id: service.examinerId}).select("-password")

        if(!examiner) return res.status(400).json({ error: "Examiner not found"})
        
        return res.status(200).json(examiner)


    } catch (error) {
        console.log("Error in Get Specific Examiner Information",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const updateExaminer = async (req, res) =>{
    const { name, email, password, phone } = req.body;

	const examinerId = req.examiner._id;
	try {
		let examiner = await Examiner.findById(examinerId);
		if (!examiner) return res.status(400).json({ error: "Examiner not found" });

		if (req.params.ExaminerId !== examinerId.toString())
			return res.status(400).json({ error: "You cannot update other examiner's profile" });

		if (password) {
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);
			examiner.password = hashedPassword;
		}

		examiner.name = name || examiner.name;
		examiner.email = email || examiner.email;
		examiner.phone = phone || examiner.phone;

		examiner = await examiner.save();

        // password should be null in response
		examiner.password = null;

		res.status(200).json(examiner);
    } catch (error) {
        console.log("Error in Update Examiner",error.message);
        return res.status(500).json({ error: error.message });
    }
}

