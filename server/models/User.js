const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    pin: {
        type: String,
        required: true
    },
    employeeNo: {
        type: String,
        required: true
    },
    parentUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'superadmin'], // Add 'superadmin' here
        required: true
    },
    lastLoggedInIP: {
        type: String
    },
    lastLoggedInTime: {
        type: String
    },
    lastActive: {
        type: String
    },
totalProfit: {
        type: Number,
        default: 0
    },
    totalPoints: {
        type: Number,
        default: 0
    },
    tasks: [
        {
            taskId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Task"
            },
            completed: {
                type: Boolean,
                default: false
            },
            status: {
                type: String,
            },
        },
    ],
    totalEarnings: {
        type: Number,
        default: 0
    },
    currentTaskIndex: {
        type: Number,
        default: 0
    },
    parentUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: null
    },
    permissions: {
        doTasks: {
            type: Boolean,
            default: true
        },
        withdraw: {
            type: Boolean,
            default: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;