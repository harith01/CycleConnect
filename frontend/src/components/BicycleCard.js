import React from 'react';

function BicycleCard({ bicycle }) {
  return (
    <div className="bicycle-card">
      <img src={require(`../assets/${bicycle.image}`).default} alt={bicycle.title} />
      <h2>{bicycle.title}</h2>
      <p>Brand: {bicycle.brand}</p>
      <p>Price: ${bicycle.price.toFixed(2)}</p>
    </div>
  );
}

export default BicycleCard;

