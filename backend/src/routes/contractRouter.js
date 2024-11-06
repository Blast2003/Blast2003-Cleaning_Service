import express from "express";
import { createContract, updateContractStatus } from "../controllers/contractController.js";

const contractRouter = express.Router();

contractRouter.post("/createContract", createContract)

contractRouter.post("/updateContractStatus/:contractId", updateContractStatus)

export default contractRouter;
