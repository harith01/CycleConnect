const express = require('express');
const router = express.Router();
const bicycleDetailController = require('../controllers/bicycleDetailController');

// GET request to fetch detailed bicycle information
router.get('/:id', bicycleDetailController.getBicycleDetail);

module.exports = router;

