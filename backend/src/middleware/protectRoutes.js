import jwt from "jsonwebtoken"
import { Variables } from "../config/variables.js";
import User from "../models/userModel.js";
import Staff from "../models/staffModel.js";
import Examiner from "../models/examinerModel.js";

export const protectRoutesForUser = async (req, res, next) =>{
    try {
        const token = req.cookies["jwt-cleaning-user"];
        if(!token){
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decode = jwt.verify(token, Variables.JWT_SECRET_KEY); // true or false or object

        if(!decode){
            return res.status(401).json({
                success: false,
                msg: "Unauthorized - No Token Provided"
            })
        }

        const user = await User.findById(decode._id).select("-password") // skip show the password

        req.user = user;
        next();

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error in Protect Routes MiddleWare of user",error.message);
    }
}

export const protectRoutesForStaff = async (req, res, next) =>{
    try {
        const token = req.cookies["jwt-cleaning-staff"];
        if(!token){
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decode = jwt.verify(token, Variables.JWT_SECRET_KEY); // true or false or object

        if(!decode){
            return res.status(401).json({
                success: false,
                msg: "Unauthorized - No Token Provided"
            })
        }

        const staff = await Staff.findById(decode._id).select("-password") // skip show the password

        req.staff = staff;
        next();

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error in Protect Routes MiddleWare of staff",error.message);
    }
}


export const protectRoutesForExaminer = async (req, res, next) =>{
    try {
        const token = req.cookies["jwt-cleaning-examiner"];
        if(!token){
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decode = jwt.verify(token, Variables.JWT_SECRET_KEY); // true or false or object

        if(!decode){
            return res.status(401).json({
                success: false,
                msg: "Unauthorized - No Token Provided"
            })
        }

        const examiner = await Examiner.findById(decode._id).select("-password") // skip show the password

        req.examiner = examiner;
        next();

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log("Error in Protect Routes MiddleWare of examiner",error.message);
    }
}