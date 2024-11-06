import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
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
    address:{
        type: String,
        required: true,
    },
    contracts:{
        // array of contracts
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Contract",
        default: []
    },

}, {
    timestamps: true,
})

const User = mongoose.model('User', userSchema);

export default User;