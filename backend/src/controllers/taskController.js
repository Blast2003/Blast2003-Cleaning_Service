import Task from "../models/taskModel.js"

export const createTask = async(req, res) =>{
    try {
        
        const {TaskName, description, AssignContract } = req.body
        // console.log("name: ", name)
        if(!TaskName ||  !description || !AssignContract ){
            return res.status(400).json({
                error: "Please enter all required fields"
            })
        }

        const task = await Task.findOne({ $and: [{TaskName}, {AssignContract}] })
        if(task){
            return res.status(400).json({error: "Task already exists in the service"})
        }


        const newTask = await Task ({
           TaskName,
           description,
           AssignContract
        })

        await newTask.save();

        return res.status(201).json({
            _id: newTask._id,
            TaskName: newTask.TaskName,
            Description: newTask.description,
            AssignContract: newTask.AssignContract,
            Complete: newTask.complete,
            completeTime: newTask.completeTime,
            completeDate: newTask.completeDate
        })
        


    } catch (error) {
        console.log("Error in Task Creation",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getTaskByService = async(req, res) =>{
    const {serviceId} = req.params
    try {
        // console.log(id)
        let task
        task = await Task.find({serviceID: serviceId})

        if(!task) return res.status(400).json({ error: "Task not found in Specific Service"})
        
        return res.status(200).json(task)


    } catch (error) {
        console.log("Error in Get All Task in Specific Service",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const completeTask = async(req, res) =>{
    const {taskId} = req.params
    try {
        // console.log(id)
        let task
        task = await Task.findById(taskId)

        if(!task) return res.status(400).json({ error: "Task not found"})
        
        task.complete = !task.complete
        task.save()
        return res.status(200).json(task)


    } catch (error) {
        console.log("Error in Check Complete Task",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const getTaskNameById = async(req, res) =>{
    const {taskId} = req.params
    try {
        // console.log(id)
        let task
        task = await Task.findById(taskId)

        if(!task) return res.status(400).json({ error: "Task in contract not found"})
        
        return res.status(200).json(task.TaskName)


    } catch (error) {
        console.log("Error in Get All Task in Specific Service",error.message);
        return res.status(500).json({ error: error.message });
    }
}