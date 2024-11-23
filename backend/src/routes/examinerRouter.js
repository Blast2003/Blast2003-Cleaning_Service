import express from "express";
import { DeleteExaminerInContract, ExaminerLogin, ExaminerLogout, ExaminerSignup, getContractsByExaminer, getExaminerThroughServiceName, getSpecificExaminer, updateExaminer } from "../controllers/examinerController.js";
import { protectRoutesForExaminer } from "../middleware/protectRoutes.js";

const examinerRouter = express.Router();

examinerRouter.post("/signup", ExaminerSignup)
examinerRouter.post("/login", ExaminerLogin)
examinerRouter.get("/getSpecificExaminer/:examinerId", getSpecificExaminer)
examinerRouter.post("/logout", ExaminerLogout)
examinerRouter.get("/getContractsByExaminer", protectRoutesForExaminer, getContractsByExaminer)
examinerRouter.post("/DeleteExaminerInContract/:ContractId", protectRoutesForExaminer, DeleteExaminerInContract)
examinerRouter.get("/getExaminerThroughServiceName/:ServiceName", getExaminerThroughServiceName)
examinerRouter.put("/update/:ExaminerId", protectRoutesForExaminer, updateExaminer)
export default examinerRouter;