import React, { useState } from 'react';
import './ListingCreationForm.css'; // Import the CSS file for styling

function ListingCreationForm() {
  const [formData, setFormData] = useState({
    title: '',
    brand: '',
    model: '',
    description: '',
    images: [],
    price: '',
    condition: '',
    location: ''
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
    // Submit form data to backend API (implement this)
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="listing-form">
      <h2>Create New Bicycle Listing</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for title, brand, model, description, images, price, condition, location */}
        {/* Use controlled components with handleInputChange */}
        
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
}

export default ListingCreationForm;

