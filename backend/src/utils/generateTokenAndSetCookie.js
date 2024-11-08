import jwt from "jsonwebtoken"
import { Variables } from "../config/variables.js";

export const generateTokenAndSetCookieForUser = (payload, res) =>{
    const token = jwt.sign( {... payload}, Variables.JWT_SECRET_KEY, {
        expiresIn: '15d',
    })

    res.cookie('jwt-cleaning-user', token,  {
        httpOnly: true, // more secure
        maxAge: 15*24*60*60* 1000, // 15 days
        sameSite: "strict" // CSRF
    })

    return token;
}

export const generateTokenAndSetCookieForStaff = (payload, res) =>{
    const token = jwt.sign( {... payload}, Variables.JWT_SECRET_KEY, {
        expiresIn: '15d',
    })

    res.cookie('jwt-cleaning-staff', token,  {
        httpOnly: true, // more secure
        maxAge: 15*24*60*60* 1000, // 15 days
        sameSite: "strict" // CSRF
    })

    return token;
}

export const generateTokenAndSetCookieForExaminer = (payload, res) =>{
    const token = jwt.sign( {... payload}, Variables.JWT_SECRET_KEY, {
        expiresIn: '15d',
    })

    res.cookie('jwt-cleaning-examiner', token,  {
        httpOnly: true, // more secure
        maxAge: 15*24*60*60* 1000, // 15 days
        sameSite: "strict" // CSRF
    })

    return token;
}
