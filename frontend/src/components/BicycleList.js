import React, { useState, useEffect } from 'react';
import BicycleCard from './BicycleCard'; // Import your BicycleCard component
import './BicycleList.css'; // Import the CSS file for styling

function BicycleList() {
  const [bicycleData, setBicycleData] = useState([]);

  // Simulated data for demonstration purposes
  const mockBicycleData = [
    {
      id: 1,
      image: 'bicycle1.jpg',
      title: 'Mountain Bike 2021',
      brand: 'Acme Bikes',
      price: 599.99
    },
    {
      id: 2,
      image: 'bicycle2.jpg',
      title: 'City Cruiser',
      brand: 'Urban Rides',
      price: 399.99
    },
    // ... more bicycle data
  ];

  useEffect(() => {
    // Fetch data from API or set mock data here
    // For now, we'll use the mockBicycleData
    setBicycleData(mockBicycleData);
  }, []);

  return (
    <div className="bicycle-list">
      {bicycleData.map(bicycle => (
        <BicycleCard key={bicycle.id} bicycle={bicycle} />
      ))}
    </div>
  );
}

export default BicycleList;

