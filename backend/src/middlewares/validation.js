// middlewares/validation.js

// Middleware to validate listing creation data
exports.validateListingData = (req, res, next) => {
  const { title, brand, model, description, images, price, condition, location } = req.body;

  if (!title || !brand || !model || !description || !images || !price || !condition || !location) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Additional validation logic as needed

  next();
};

