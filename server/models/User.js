const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        default: null
    },
    pin: {
        type: String,
        required: true
    },
    employeeNo: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    referralNo: {
        type: String
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin']
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
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
