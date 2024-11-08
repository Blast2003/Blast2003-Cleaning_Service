import mongoose from 'mongoose';


// after create task in web => add to contract
const contractSchema = mongoose.Schema({

    // 10:15:30 AM
    executionTime:{
        type: String,
        required: true,
    },

    //  10/9/2024
    executionDate:{
        type: String,
        required: true,
    },
    ServiceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Service' ,
        required: true,
    },
    ServiceName:{
        type: String,
        required: true,
    },
    StaffName:{
        type: String, 
        required: true,
    },
    Complete:{
        type: Boolean,
        default: false
    },
    taskList: [
        {type: mongoose.Schema.Types.ObjectId, ref: "Task"},
    ],
    participants:[
        {type: mongoose.Schema.Types.ObjectId, ref: "User"},
        {type: mongoose.Schema.Types.ObjectId, ref: "Staff"},
        {type: mongoose.Schema.Types.ObjectId, ref: "Examiner"}
    ],
    totalPrice:{
        type: String,
        required: true,
    },
}, 
{
    timestamps: true,
})

const Contract = mongoose.model('Contract', contractSchema);

export default Contract;