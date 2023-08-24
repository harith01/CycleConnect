const Listing = require('../models/Listing'); // Import the Listing model

// Controller function to create a new bicycle listing
exports.createListing = async (req, res) => {
  try {
    // Destructure the required fields from the request body
    const { title, brand, model, description, images, price, condition, location } = req.body;

    // Create a new listing in the database
    const newListing = await Listing.create({
      title,
      brand,
      model,
      description,
      images,
      price,
      condition,
      location
    });

    res.status(201).json({ success: true, listing: newListing });
  } catch (error) {
    console.error('Error creating listing:', error);
    res.status(500).json({ success: false, error: 'Error creating listing' });
  }
};

