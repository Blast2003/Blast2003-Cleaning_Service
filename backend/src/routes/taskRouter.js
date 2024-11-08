import express from "express";
import { completeTask, createTask, getTaskByService } from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.post("/createTask", createTask)
taskRouter.get("/getTaskByService/:serviceId", getTaskByService)
taskRouter.post("/completeTask/:taskId", completeTask)
export default taskRouter;