import express from "express";
import { createContract, updateContractStatus, deleteContract, getUserByContract } from "../controllers/contractController.js";
import { protectRoutesForUser } from "../middleware/protectRoutes.js";

const contractRouter = express.Router();

contractRouter.post("/createContract", protectRoutesForUser, createContract)

contractRouter.post("/updateContractStatus/:contractId", updateContractStatus)
contractRouter.delete("/deleteContract/:contractId", deleteContract)
contractRouter.get("/getUserByContract/:contractId", getUserByContract)

export default contractRouter;
