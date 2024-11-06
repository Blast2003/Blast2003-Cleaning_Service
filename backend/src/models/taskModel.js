import mongoose from 'mongoose';

// create 5 default tasks for each service
const taskSchema = mongoose.Schema({
    TaskName:{
        type: String,
        required: true,
    },
    complete:{
        type: Boolean,
        default: false,
    },
    description:{
        type: String,
        required: true,
    },
    serviceID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true,
    },
    // format "10:15:30 AM"
    completeTime:{ // when click complete -> also update
        type: String,
        default: "",
    },

    // format "10/9/2024"
    completeDate:{ // when click complete -> also update
        type: String,
        default: "",
    },

}, {
    timestamps: true,
})

const Task = mongoose.model('Task', taskSchema);

export default Task;