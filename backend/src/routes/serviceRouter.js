import express from "express";
import { createService, getAllServices, getServiceByServiceName,getServiceByServiceId } from "../controllers/serviceController.js";

const serviceRouter = express.Router();

serviceRouter.post("/createService", createService)
serviceRouter.get("/getAllServices", getAllServices)
serviceRouter.get("/getServiceByServiceName/:ServiceName", getServiceByServiceName)
serviceRouter.get("/getServiceByServiceId/:ServiceId", getServiceByServiceId)
export default serviceRouter;