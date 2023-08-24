// middlewares/validation.js

const { body } = require('express-validator');

// Middleware to validate listing creation data
exports.validateListingData = (req, res, next) => {
  const { title, brand, model, description, images, price, condition, location } = req.body;

  if (!title || !brand || !model || !description || !images || !price || !condition || !location) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Additional validation logic as needed

  next();
};

// Middleware to validate inquiry submission data
exports.validateInquiryData = [
  body('name').trim().not().isEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email address'),
  body('message').trim().not().isEmpty().withMessage('Message is required')
];

