import express from "express";
import { createContract, updateContractStatus } from "../controllers/contractController.js";
import { protectRoutesForUser } from "../middleware/protectRoutes.js";

const contractRouter = express.Router();

contractRouter.post("/createContract", protectRoutesForUser, createContract)

contractRouter.post("/updateContractStatus/:contractId", protectRoutesForUser, updateContractStatus)

export default contractRouter;
