import Staff from "../models/staffModel.js"
import bcrypt from "bcryptjs"
import { generateTokenAndSetCookieForStaff } from "../utils/generateTokenAndSetCookie.js"
import Contract from "../models/contractModel.js"
import Service from "../models/serviceModel.js"

export const StaffSignup = async (req, res) => {
    try {
        
        const {name, email, password, phone} = req.body
        // console.log("name: ", name)
        if(!name || !email  || !password || !phone ){
            return res.status(400).json({
                error: "Please enter all required fields"
            })
        }

        const staff = await Staff.findOne({ email })
        if(staff){
            return res.status(400).json({error: "Staff already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        const newStaff = await Staff ({
            name,
            email,
            password: hash,
            phone,
        })

        await newStaff.save();

        if(newStaff){
            const token = generateTokenAndSetCookieForStaff({
                _id: newStaff._id,
                staffName: newStaff.name
            }, res)
    
            return res.status(201).json({
                _id: newStaff._id,
                name: newStaff.name,
                email: newStaff.email,
                phone: newStaff.phone,
                token: token
            })
        } else{
            res.status(400).json({ error: "Invalid staff data" });
        }

    } catch (error) {
        console.log("Error in Staff signup",error.message);
        return res.status(500).json({ error: error.message });
    }
}


export const StaffLogin = async (req, res) =>{
    try {
        const {email, password} = req.body

        const staff = await Staff.findOne({ email })
        const isCorrectPassword = bcrypt.compareSync(password, staff?.password || "")
        if(!staff ||  !isCorrectPassword){
            return res.status(400).json({
                error: "Invalid password or email"
            })
        }

        const token = generateTokenAndSetCookieForStaff({
            _id: staff._id,
            staffName: staff.username
        }, res);

        return res.status(200).json({
            _id: staff._id,
            name: staff.name,
            email: staff.email,
            phone: staff.phone,
            token: token
        })

    } catch (error) {
        console.log("Error in Staff login",error.message);
        return res.status(500).json({ error: error.message });
    }
}


export const getSpecificStaff = async(req, res) =>{
    const id = req.params.staffId
    try {
        let staff
        staff = await Staff.findOne({_id: id}).select("-password")

        if(!staff) return res.status(400).json({ error: "Staff not found"})
        
        return res.status(200).json(staff)


    } catch (error) {
        console.log("Error in Get Specific Staff Information",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const StaffLogout = async (req, res) =>{
    try {
        res.cookie("jwt-cleaning-staff", "", {maxAge: 1}); // first approach

        // res.clearCookie("jwt-threads"); => second approach
        return res.status(200).json({
            message: "Staff logged out successfully"
        })
    } catch (error) {
        console.log("Error in Staff logout",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getContractsByStaff = async (req, res) =>{
    try {
        const staffId = req.staff._id;
        let contracts = await Contract.find({
            participants:{$all: [staffId]}
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
        console.log("Error in Staff Get Contract",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const DeleteStaffInContract = async (req, res) =>{
    const staffId = req.staff._id;
    try {
        const {ContractId} = req.params;
        let contracts = await Contract.findById(ContractId)

        if(!contracts){
            return res.status(400).json({ error: "Contract not found."})
        }

        contracts.participants.pull(staffId)
        contracts.save()
        return res.status(200).json(contracts);

    } catch (error) {
        console.log("Error in Delete Staff in Contract",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const GetAllStaff = async (req, res) =>{
    try {
        const AllStaffs = await Staff.find()

        if(!AllStaffs){
            return res.status(400).json({ error: "Don't have any staff ."})
        }

        return res.status(200).json(AllStaffs);

    } catch (error) {
        console.log("Error in Get All Staff",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const updateStaff = async(req, res) =>{
    try {
        const {name, email, password, phone} = req.body;
        const staffId = req.staff._id;

        let staff = await Staff.findById(staffId);
        if(!staff) return req.status(400).json({error: "Staff not found"})

        if(req.params.StaffId !== staffId.toString()) return res.status(400).json({ error: "You cannot update other staff's profile" });
        
        if(password){
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            staff.password = hashedPassword;
        }

        staff.name = name || staff.name;
        staff.email = email || staff.email;
        staff.phone = phone || staff.phone;

        staff = await staff.save();

        staff.password = null;

        res.status(200).json(staff);


    } catch (error) {
        console.log("Error in update staff", error.message)
        res.status(500).json({error: error.message})
    }
}