import express from "express";
import { completeTask, createTask, getTaskByService, getTaskNameById} from "../controllers/taskController.js";

const taskRouter = express.Router();

taskRouter.post("/createTask", createTask)
taskRouter.get("/getTaskByService/:serviceId", getTaskByService)
taskRouter.post("/completeTask/:taskId", completeTask)
taskRouter.get("/getTaskNameById/:taskId", getTaskNameById)
export default taskRouter;