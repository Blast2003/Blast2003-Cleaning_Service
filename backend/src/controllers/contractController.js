import Contract from "../models/contractModel.js"
import USER from "../models/userModel.js"
import STAFF from "../models/staffModel.js"
import EXAMINER from "../models/examinerModel.js"
import Service from "../models/serviceModel.js"
import Task from "../models/taskModel.js"

export const createContract = async(req, res) =>{
    try {
      
        const { executionDate, ServiceId , Staff, User, Examiner, taskList, participants,  totalPrice} = req.body




        // console.log("name: ", name)
        if(!executionDate || !ServiceId  || !taskList || !participants || !totalPrice || !User || !Staff || !Examiner){
            return res.status(400).json({
                error: "Please enter all required fields in create contract"
            })
        }

        const currentDate = new Date();

        // 01/12/2004
        const [executionDay, executionMonth, executionYear] = executionDate.split("/").map(Number);
        const parsedExecutionDate = new Date(executionYear, executionMonth - 1, executionDay);

        // Before creating the new contract, check for contracts with empty participants and delete them
        const contractsToDelete = await Contract.find({ participants: { $size: 0 } });
        // console.log(contractsToDelete)
        if (contractsToDelete.length > 0) {
            await Contract.deleteMany({ participants: { $size: 0 } });
            console.log("Deleted contracts with empty participants.");
        }


        // Check if executionDate is in the past
        if (parsedExecutionDate <= currentDate) {
            return res.status(400).json({
                error: "The execution date must be larger than now. Please choose a valid date."
            });
        }
        
        //get Service Name
        const service = await Service.findById(ServiceId)
        const ServiceName =  service.ServiceName

        const contract = await Contract.findOne({ $and: [{ServiceName}, {executionDate}, {"User._id": User._id}] })
        if(contract){
            return res.status(400).json({
                error: "You has already booked this service at that day. Please choose another day."
            })
        }

        const contract1 = await Contract.findOne({ $and: [{"Staff._id": Staff._id}, {executionDate}] })
        if(contract1){
            return res.status(400).json({
                error: "The Staff already has the schedule at that day. Please choose another day."
            })
        }

        // Create new Contract
        const newContract = await Contract ({
            executionDate,
            ServiceId,
            ServiceName,
            Staff,
            User,
            Examiner,
            taskList,
            participants,
            totalPrice
        })

        await newContract.save();

        const userId = newContract.participants[0]
        const staffId = newContract.participants[1]
        const examinerId = newContract.participants[2]
        
        //console.log(userId, "\n", staffId, "\n" , examinerId, "\n")

        //find user, staff and examiner
        const user = await USER.findById(userId)
        const staff = await STAFF.findById(staffId)
        const examiner = await EXAMINER.findById(examinerId)

        // push contract
        user.contracts.push(newContract._id)
        staff.assignedContracts.push(newContract._id)
        examiner.assignedContracts.push(newContract._id)

        // save all 
        await Promise.all([
            user.save(),
            staff.save(),
            examiner.save()
        ])

        return res.status(201).json({
            _id: newContract._id,
            executionTime: newContract.executionTime,
            executionDate: newContract.executionDate,
            ServiceId: newContract.serviceId,
            ServiceName: newContract.ServiceName,
            Staff: newContract.Staff,
            User: newContract.User,
            Examiner: newContract.Examiner,
            Complete: newContract.Complete,
            taskList: newContract.taskList,
            participants: newContract.participants,
            totalPrice: newContract.totalPrice,
        })
        


    } catch (error) {
        console.log("Error in Contract Creation",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const updateContractStatus = async(req, res) =>{
    const {contractId} = req.params
    try {
        const contract = await Contract.findById(contractId)
        if(!contract){
            return res.status(400).json({
                error: "Contract not found"
            })
        }

        const tasks = await Task.find({ _id: { $in: contract.taskList } });

        // check if all tasks are complete
        const allTasksComplete = tasks.every(task => task.complete);

        if(!allTasksComplete){
            return res.status(400).json({
                error: "Have Some Incomplete Task In The Contract"
            })
        }

        contract.Complete = true;
        await contract.save();

        return res.status(200).json(contract)
        
    } catch (error) {
        console.log("Error in Update Contract Status",error.message);
        return res.status(500).json({ error: error.message });
    }
}

export const deleteContract = async (req, res) =>{
    const {contractId} = req.params
    try {
        const contract = await Contract.findById(contractId);
        if(!contract){
            return res.status(400).json({
                error: "Contract not found"
            })
        }

        const deleteContract = await Contract.findByIdAndDelete(contractId)
        return res.status(200).json({message: "Delete Contract Successfully", DeletedContract: deleteContract})

    } catch (error) {
        console.log("Error in Delete Contract", error.message)
        return res.status(500).json({ error: `Internal Server Error ${error.message}`}) 
    }
}

export const getUserByContract = async (req, res) =>{
    const {contractId} = req.params
    try {
        // console.log(contractId)
        const contract = await Contract.findById(contractId);
        if(!contract){
            return res.status(400).json({
                error: "Contract not found"
            })
        }

        const user = await User.findById(contract.participants[0])
        return res.status(200).json(user)

    } catch (error) {
        console.log("Error in Get User By Contract", error.message)
        return res.status(500).json({ error: `Internal Server Error ${error.message}`}) 
    }
}