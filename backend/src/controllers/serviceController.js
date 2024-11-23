import Service from "../models/serviceModel.js"

import Task from '../models/taskModel.js'

export const createService = async(req, res) => {
    try {
        const { ServiceName, description, examinerId, ServiceType } = req.body;

        if (!ServiceName || !description || !examinerId || !ServiceType) {
            return res.status(400).json({
                error: "Please enter all required fields"
            });
        }

        const newService = await Service({
            ServiceName,
            description,
            examinerId,
            ServiceType
        });

        await newService.save();

        // Define tasks based on the ServiceName
        let tasks = [];
        if (ServiceName === 'Carpet Cleaning') {
            tasks = [
                { TaskName: "Vacuuming", description: "Remove loose dirt and debris from the carpet." },
                { TaskName: "Pre-treatment", description: "Apply a cleaning solution to stains or heavily soiled areas." },
                { TaskName: "Spot cleaning", description: "Treat specific stains with appropriate cleaning products." },
                { TaskName: "Deep cleaning", description: "Use a steam cleaner or hot water extraction method to remove embedded dirt and grime." },
                { TaskName: "Drying", description: "Ensure the carpet is completely dry to prevent mold and mildew." }
            ];
        } else if (ServiceName === 'Furniture Cleaning') {
            tasks = [
                { TaskName: "Dusting", description: "Remove dust from furniture surfaces." },
                { TaskName: "Vacuuming", description: "Vacuum upholstered furniture to remove dirt and debris." },
                { TaskName: "Spot cleaning", description: "Treat stains on furniture with appropriate cleaning solutions." },
                { TaskName: "Upholstery cleaning", description: "Use a professional upholstery cleaning service or steam cleaner." },
                { TaskName: "Leather conditioning", description: "Apply leather conditioner to maintain appearance and prevent drying." }
            ];
        } else if (ServiceName === 'Wall Washing') {
            tasks = [
                { TaskName: "Dusting", description: "Remove loose dirt and debris from walls." },
                { TaskName: "Washing", description: "Apply a cleaning solution to stains or heavily soiled areas." },
                { TaskName: "Rinsing", description: "Treat specific stains with appropriate cleaning products." },
                { TaskName: "Drying", description: "Use a steam cleaner or hot water extraction method to remove embedded dirt and grime." }
            ];
        } else if (ServiceName === 'Floor Cleaning') {
            tasks = [
                { TaskName: "Sweeping or vacuuming", description: "Remove loose dirt and debris from the floor." },
                { TaskName: "Mopping", description: "Use a mop and cleaning solution to clean hard floors." },
                { TaskName: "Scrubbing", description: "For tougher stains or buildup, scrub the floor with a brush or scrubber." },
                { TaskName: "Polishing", description: "Polish or wax hardwood floors to maintain shine and protection." },
                { TaskName: "Rug cleaning", description: "Vacuum rugs regularly and spot clean any stains." }
            ];
        }

        // Create and save tasks with the new serviceID
        const taskPromises = tasks.map(taskData => {
            return new Task({ ...taskData, serviceID: newService._id }).save();
        });
        await Promise.all(taskPromises);

        return res.status(201).json({
            _id: newService._id,
            ServiceName: newService.ServiceName,
            description: newService.description,
            examinerId: newService.examinerId,
            ServiceType: newService.ServiceType,
            price: newService.price
        });

    } catch (error) {
        console.log("Error in Service Creation", error.message);
        return res.status(500).json({ error: error.message });
    }
}


export const getAllServices = async(req, res) =>{
    try {
        
        const allServices = await Service.find()

        if(!allServices)
            return res.status(400).json({
                error : "Do not have any service"
            })

        return res.status(200).json(allServices)
        


    } catch (error) {
        console.log("Error in Get All Services",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getServiceByServiceName = async(req, res) =>{
    const {ServiceName} = req.params
    try {
        const service = await Service.findOne({ServiceName: ServiceName})

        if(!service) return res.status(400).json({ error: "Service not found"})
        
        return res.status(200).json(service)


    } catch (error) {
        console.log("Error in Get Specific ExaminerId by Service Name",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getServiceByServiceId = async(req, res) =>{
    const {ServiceId} = req.params
    try {
        const service = await Service.findById(ServiceId)

        if(!service) return res.status(400).json({ error: "Service not found"})
        
        return res.status(200).json(service)


    } catch (error) {
        console.log("Error in Get Specific ExaminerId by Service Name",error.message);
        return res.status(500).json({ error: error.message });
    }
}