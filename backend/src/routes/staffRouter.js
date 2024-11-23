import express  from "express";
import { DeleteStaffInContract, GetAllStaff, getContractsByStaff, getSpecificStaff, StaffLogin, StaffLogout, StaffSignup, updateStaff } from "../controllers/staffController.js";
import { protectRoutesForStaff } from "../middleware/protectRoutes.js";

const staffRouter = express.Router();

staffRouter.post("/signup", StaffSignup)
staffRouter.post("/login", StaffLogin)
staffRouter.get("/getSpecificStaff/:staffId", getSpecificStaff)
staffRouter.post("/logout", StaffLogout)
staffRouter.get("/getContractsByStaff", protectRoutesForStaff, getContractsByStaff)
staffRouter.post("/DeleteStaffInContract/:ContractId", protectRoutesForStaff, DeleteStaffInContract)
staffRouter.get("/GetAllStaff", GetAllStaff)
staffRouter.put("/update/:StaffId", protectRoutesForStaff, updateStaff)
export default staffRouter;

