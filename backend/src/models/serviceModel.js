import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
    ServiceName:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    examinerId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Examiner',
        required: true,
    }

}, {
    timestamps: true,
})

const Service = mongoose.model('Service', serviceSchema);

export default Service;