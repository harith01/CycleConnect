const express = require('express');
const router = express.Router();
const listingsController = require('../controllers/listingsController');

// Route for creating a new bicycle listing
router.post('/create', listingsController.createListing);

module.exports = router;

