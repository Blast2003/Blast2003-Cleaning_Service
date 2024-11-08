import express from "express";
import { createService, getAllServices } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

serviceRouter.post("/createService", createService)
serviceRouter.get("/getAllServices", getAllServices)

export default serviceRouter;