import express from "express";
import { createService, getAllServices, getServiceByServiceName } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

serviceRouter.post("/createService", createService)
serviceRouter.get("/getAllServices", getAllServices)
serviceRouter.get("/getServiceByServiceName/:ServiceName", getServiceByServiceName)
export default serviceRouter;