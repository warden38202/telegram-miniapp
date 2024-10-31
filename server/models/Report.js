// server/models/Item.js
const mongoose = require('mongoose');

// Function to generate a random 9-digit number
const generateRandomCaseId = () => {
    return Math.floor(100000000 + Math.random() * 900000000).toString();
};

// Define the Item schema
const ReportSchema = new mongoose.Schema({
    reportType: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        required: true,
    },
    walletAddress: {
        type: String,
        required: true,
    },
    amount: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    partiesEmails: {
        type: Object,
        required: true,
    },
    incidentDescription: {
        type: String,
    },
    incidentDate: {
        type: Date,
        required: true,
    },
    file_url: {
        type: String,
    },
    status: {
        type: Number,
        default: 0,
    },
    caseId: {
        type: String,
    },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt fields

// Middleware to generate caseId before saving
ReportSchema.pre('save', function(next) {
    // Only generate caseId if it's not already set
    if (!this.caseId) {
        this.caseId = generateRandomCaseId();
    }
    next();
});

// Create and export the model
module.exports = mongoose.model('Report', ReportSchema);
