import mongoose from 'mongoose';

const staffSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
    assignedContracts:{
        // array of contracts
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Contract",
        default: []
    },

}, {
    timestamps: true,
})

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;