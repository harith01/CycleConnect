const Inquiry = require('../models/Inquiry'); // Import the Inquiry model
const Listing = require('../models/Listing'); // Import the Listing model
const sendEmail = require('../utils/email'); // Import a function to send email notifications

// Controller function to submit an inquiry
exports.submitInquiry = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const listingId = req.params.listingId; // Extract listing ID from URL parameter

    // Create a new inquiry in the database
    const inquiry = await Inquiry.create({
      name,
      email,
      message,
      listing: listingId
    });

    // Find the listing associated with the inquiry
    const listing = await Listing.findById(listingId);

    // Notify the seller about the new inquiry
    await sendEmail({
      to: listing.sellerEmail, // Seller's email address
      subject: 'New Inquiry for Your Listing',
      text: `You have received a new inquiry for your listing: ${listing.title}. Message: ${message}`
    });

    res.status(201).json({ message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    res.status(500).json({ error: 'An error occurred while submitting the inquiry' });
  }
};

