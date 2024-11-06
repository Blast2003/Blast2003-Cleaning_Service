import mongoose from 'mongoose';

const examinerSchema = mongoose.Schema({
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

const Examiner = mongoose.model('Examiner', examinerSchema);

export default Examiner;