import express from "express";
import { createEmail } from "../controllers/EmailController.js";

const mailRouter = express.Router();

mailRouter.post("/create", createEmail);


export default mailRouter;