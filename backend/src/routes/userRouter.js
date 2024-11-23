import express from "express";
import { DeleteUserInContract, getContractsByUser, getSpecificUser, UserLogin, UserLogout, UserSignup, updateUser } from "../controllers/userController.js";
import { protectRoutesForUser } from "../middleware/protectRoutes.js";

const userRouter = express.Router();

userRouter.post("/signup", UserSignup)
userRouter.post("/login", UserLogin)
userRouter.get("/", protectRoutesForUser, getSpecificUser)
userRouter.post("/logout", UserLogout)
userRouter.get("/getContractsByUser", protectRoutesForUser, getContractsByUser)
userRouter.post("/DeleteUserInContract/:ContractId", protectRoutesForUser, DeleteUserInContract)
userRouter.put("/update/:id", protectRoutesForUser ,updateUser)

export default userRouter;