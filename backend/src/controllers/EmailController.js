import nodemailer from "nodemailer"
import { Variables } from "../config/variables.js";

export const createEmail = async(req, res) =>{
    try {
      
        const {  User, Examiner, emailContent} = req.body

        const mailList = [
            User.email,
            Examiner.email
        ];


        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: Variables.EMAIL,
              pass: Variables.EMAIL_PASSWORD,
            },
          });
        
          let info = await transporter.sendMail({
            from: `"Cleaning Company " <*${Variables.EMAIL}*>`,
            to: mailList, 
            subject: "Cleaning Service Contract",
            html: emailContent,
          });
        
          console.log(info.messageId);
          console.log(info.accepted); // Array of emails that were successful
          console.log(info.rejected); // Array of unsuccessful emails

          return res.status(200).json(info)

    } catch (error) {
        console.log("Error in Email Creation",error.message);
        return res.status(500).json({ error: error.message });
    }
}