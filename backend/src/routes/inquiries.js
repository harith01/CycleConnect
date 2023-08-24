const express = require('express');
const router = express.Router();
const inquiriesController = require('../controllers/inquiriesController');

// POST request to submit a new inquiry
router.post('/', inquiriesController.submitInquiry);

module.exports = router;

