const Bicycle = require('../models/Bicycle'); // Import the Bicycle model

exports.getBicycleDetail = async (req, res) => {
  try {
    const bicycleId = req.params.id; // Extract bicycle ID from URL parameter
    const bicycle = await Bicycle.findById(bicycleId);

    if (!bicycle) {
      return res.status(404).json({ error: 'Bicycle not found' });
    }

    res.status(200).json(bicycle);
  } catch (error) {
    console.error('Error fetching bicycle detail:', error);
    res.status(500).json({ error: 'An error occurred while fetching bicycle detail' });
  }
};

