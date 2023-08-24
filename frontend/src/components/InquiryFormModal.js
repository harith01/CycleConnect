import React, { useState } from 'react';
import './InquiryFormModal.css'; // Import the CSS file for styling

function InquiryFormModal({ onClose, listingId }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Submit inquiry data to backend API (implement this)
    console.log('Inquiry data submitted:', formData);
    onClose(); // Close the modal
  };

  return (
    <div className="inquiry-modal">
      <div className="inquiry-content">
        <h2>Contact Seller</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleInputChange}></textarea>

          <button type="submit">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
}

export default InquiryFormModal;

