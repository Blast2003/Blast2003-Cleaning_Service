import mongoose from 'mongoose';

const serviceSchema = mongoose.Schema({
    ServiceName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    examinerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Examiner',
        required: true,
    },
    ServiceType: {
        type: String,
        enum: ['basic', 'pro', 'deluxe'],
        required: true,
    },
    price: {
        type: String
    }
}, {
    timestamps: true,
});

// Pre-save hook to set price based on ServiceType
serviceSchema.pre('save', function(next) {
    switch (this.ServiceType) {
        case 'basic':
            this.price = '350';
            break;
        case 'pro':
            this.price = '650';
            break;
        case 'deluxe':
            this.price = '950';
            break;
    }
    next();
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;