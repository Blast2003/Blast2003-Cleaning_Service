import Contract from "../models/contractModel.js"
import User from "../models/userModel.js"
import Staff from "../models/staffModel.js"
import Examiner from "../models/examinerModel.js"
import Service from "../models/serviceModel.js"
import Task from "../models/taskModel.js"

export const createContract = async(req, res) =>{
    try {
      
        const {executionTime, executionDate, ServiceId , StaffName, taskList, participants,  totalPrice} = req.body
        // console.log("name: ", name)
        if(!executionTime ||  !executionDate || !ServiceId || !StaffName || !taskList || !participants || !totalPrice){
            return res.status(400).json({
                error: "Please enter all required fields in create contract"
            })
        }
        

        const contract = await Contract.findOne({ $and: [{executionTime}, {executionDate}] })
        if(contract){
            return res.status(400).json({
                error: "Contract already exists at this timestamp "
            })
        }

        //get Service Name
        const service = await Service.findById(ServiceId)
        const ServiceName =  service.ServiceName

        // get Examiner Name
        const newExaminer = await Examiner.findById(service.examinerId)
        const ExaminerName = newExaminer.name


        // Create new Contract
        const newContract = await Contract ({
            executionTime,
            executionDate,
            ServiceId,
            ServiceName,
            ExaminerName,
            StaffName,
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
        const user = await User.findById(userId)
        const staff = await Staff.findById(staffId)
        const examiner = await Examiner.findById(examinerId)

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
            ExaminerName: newContract.ExaminerName,
            StaffName: newContract.StaffName,
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