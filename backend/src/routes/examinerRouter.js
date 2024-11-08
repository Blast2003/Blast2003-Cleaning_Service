import express from "express";
import { DeleteExaminerInContract, ExaminerLogin, ExaminerLogout, ExaminerSignup, getContractsByExaminer, getExaminerThroughService, getSpecificExaminer } from "../controllers/examinerController.js";
import { protectRoutesForExaminer } from "../middleware/protectRoutes.js";

const examinerRouter = express.Router();

examinerRouter.post("/signup", ExaminerSignup)
examinerRouter.post("/login", ExaminerLogin)
examinerRouter.get("/",protectRoutesForExaminer, getSpecificExaminer)
examinerRouter.post("/logout", ExaminerLogout)
examinerRouter.get("/getContractsByExaminer", protectRoutesForExaminer, getContractsByExaminer)
examinerRouter.post("/DeleteExaminerInContract/:ContractId", protectRoutesForExaminer, DeleteExaminerInContract)
examinerRouter.get("/getExaminerThroughService/:ServiceId", protectRoutesForExaminer, getExaminerThroughService)
export default examinerRouter;