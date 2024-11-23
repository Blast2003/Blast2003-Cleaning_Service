import User from "../models/userModel.js"
import Contract from "../models/contractModel.js"
import bcrypt from "bcryptjs"
import { generateTokenAndSetCookieForUser } from "../utils/generateTokenAndSetCookie.js"

export const UserSignup = async (req, res) => {
    try {
        
        const {name, email, password, phone, address} = req.body
        // console.log("name: ", name)
        if(!name || !email  || !password || !phone || !address){
            return res.status(400).json({
                error: "Please enter all required fields"
            })
        }

        const user = await User.findOne({ email })
        if(user){
            return res.status(400).json({error: "User already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        const newUser = await User ({
            name,
            email,
            password: hash,
            phone,
            address
        })

        await newUser.save();

        if(newUser){
            const token = generateTokenAndSetCookieForUser({
                _id: newUser._id,
                username: newUser.username
            }, res)
    
            return res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                phone: newUser.phone,
                address: newUser.address,
                token: token
            })
        } else{
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in User signup",error.message);
        return res.status(500).json({ error: error.message });
    }
}


export const UserLogin = async (req, res) =>{
    try {
        const {email, password} = req.body

        if(!email){
            return res.status(400).json({
                error: "Please enter email"
            })
        }

        if(!password){
            return res.status(400).json({
                error: "Please enter password"
            })
        }

        const user = await User.findOne({ email })
        const isCorrectPassword = bcrypt.compareSync(password, user?.password || "")
        if(!user ||  !isCorrectPassword){
            return res.status(400).json({
                error: "Invalid password or email"
            })
        }

        const token = generateTokenAndSetCookieForUser({
            _id: user._id,
            username: user.name
        }, res);

        return res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
            token: token
        })

    } catch (error) {
        console.log("Error in User login",error.message);
        return res.status(500).json({ error: error.message });
    }
}


export const getSpecificUser = async(req, res) =>{
    const id = req.user._id
    try {
        let user
        user = await User.findOne({_id: id}).select("-password")

        if(!user) return res.status(400).json({ error: "User not found"})
        
        return res.status(200).json(user)


    } catch (error) {
        console.log("Error in Get Specific User Information",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const UserLogout = async (req, res) =>{
    try {
        res.cookie("jwt-cleaning-user", "", {maxAge: 1}); // first approach

        // res.clearCookie("jwt-threads"); => second approach
        return res.status(200).json({
            message: "User logged out successfully"
        })
    } catch (error) {
        console.log("Error in User logout",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getContractsByUser = async (req, res) =>{
    try {
        const userId = req.user._id;
        let contracts = await Contract.find({
            participants:{$all: [userId]}
        })

        if(!contracts){
            return res.status(400).json({ error: "Contract not found. So can not get the Service."})
        }
  
        // Return all contracts as a response
        return res.status(200).json(contracts);

    } catch (error) {
        console.log("Error in User Get Contract",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const DeleteUserInContract = async (req, res) =>{
    const userId = req.user._id;
    try {
        const {ContractId} = req.params;
        let contracts = await Contract.findById(ContractId)

        if(!contracts){
            return res.status(400).json({ error: "Contract not found."})
        }

        contracts.participants.pull(userId)
        contracts.save()
        return res.status(200).json(contracts);

    } catch (error) {
        console.log("Error in Delete User in Contract",error.message);
        return res.status(500).json({ error: error.message });
    }
}


export const updateUser = async (req, res) =>{
    const { name, email, password, phone, address } = req.body;

	const userId = req.user._id;
	try {
		let user = await User.findById(userId);
		if (!user) return res.status(400).json({ error: "User not found" });

		if (req.params.id !== userId.toString())
			return res.status(400).json({ error: "You cannot update other user's profile" });

		if (password) {
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);
			user.password = hashedPassword;
		}

		user.name = name || user.name;
		user.email = email || user.email;
		user.phone = phone || user.phone;
		user.address = address || user.address;

		user = await user.save();

        // password should be null in response
		user.password = null;

		res.status(200).json(user);
    } catch (error) {
        console.log("Error in Update User",error.message);
        return res.status(500).json({ error: error.message });
    }
}