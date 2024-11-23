import mongoose from 'mongoose';


// after create task in web => add to contract
const contractSchema = mongoose.Schema({

    // 10:15:30 AM
    executionTime:{
        type: String,
        default: "9:00 AM",
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
    Staff: {
      type: Object, 
      required: true,
    },
    User: {
      type: Object, 
      required: true,
    },
    Examiner: {
      type: Object, 
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
        {type: mongoose.Schema.Types.ObjectId, ref: "User"}, // already has as global object 
        {type: mongoose.Schema.Types.ObjectId, ref: "Staff"}, // choose staff  => retrieve StaffID
        {type: mongoose.Schema.Types.ObjectId, ref: "Examiner"} // service => retrieve ExaminerID
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