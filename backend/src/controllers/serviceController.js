import Service from "../models/serviceModel.js"

export const createService = async(req, res) =>{
    try {
        
        const {ServiceName, price, description, examinerId } = req.body
        // console.log("name: ", name)
        if(!ServiceName ||  !price || !description || !examinerId ){
            return res.status(400).json({
                error: "Please enter all required fields"
            })
        }

        const service = await Service.findOne({ ServiceName })
        if(service){
            return res.status(400).json({error: "Service already exists"})
        }


        const newService = await Service ({
            ServiceName,
            price,
            description,
            examinerId
        })

        await newService.save();

        return res.status(201).json({
            _id: newService._id,
            ServiceName: newService.ServiceName,
            price: newService.price,
            description: newService.description
        })
        


    } catch (error) {
        console.log("Error in Service Creation",error.message);
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