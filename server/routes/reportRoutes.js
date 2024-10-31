// server/routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Report = require('../models/Report');

// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'server/uploads/'); // Define the uploads directory
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Append file extension
    }
});

// Initialize multer
const upload = multer({ storage });

// Create a new report with file upload and report data in a single request
router.post('/', upload.single('file'), async (req, res) => {
    const newReport = new Report({
        reportType: req.body.reportType,
        userId: req.body.userId,
        walletAddress: req.body.walletAddress,
        amount: req.body.amount,
        description: req.body.description,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        partiesEmails: req.body.partiesEmails,
        incidentDescription: req.body.incidentDescription,
        incidentDate: req.body.incidentDate,
        file_url: req.file ? req.file.path : null, // Save file path in database
    });

    try {
        const savedReport = await newReport.save();
        res.status(201).json(savedReport);
    } catch (error) {
        res.status(400).json({ message: 'Error saving report', error });
    }
});

// Read all reports
router.get('/', async (req, res) => {
    try {
        const reports = await Report.find();
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reports', error });
    }
});

// Read a single report by ID
router.get('/:id', async (req, res) => {
    try {
        const report = await Report.findById(req.params.id);
        if (report) {
            res.status(200).json(report);
        } else {
            res.status(404).json({ message: 'Report not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching report', error });
    }
});

// Read reports by status
router.get('/status/:status', async (req, res) => {
    try {
        const status = parseInt(req.params.status); // Convert status to an integer
        const reports = await Report.find({ status }); // Filter reports by status
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reports', error });
    }
});

// Update a report by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedReport = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedReport) {
            res.status(200).json(updatedReport);
        } else {
            res.status(404).json({ message: 'Report not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating report', error });
    }
});

// Delete a report by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedReport = await Report.findByIdAndDelete(req.params.id);
        if (deletedReport) {
            res.status(200).json({ message: 'Report deleted successfully' });
        } else {
            res.status(404).json({ message: 'Report not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting report', error });
    }
});

module.exports = router;
