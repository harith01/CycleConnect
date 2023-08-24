import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BicycleDetail = ({ match }) => {
  const [bicycle, setBicycle] = useState(null);

  useEffect(() => {
    // Fetch detailed bicycle information from the backend based on match.params.id
    const fetchBicycleDetail = async () => {
      try {
        const response = await axios.get(`/api/bicycles/${match.params.id}`);
        setBicycle(response.data);
      } catch (error) {
        console.error('Error fetching bicycle detail:', error);
      }
    };

    fetchBicycleDetail();
  }, [match.params.id]);

  if (!bicycle) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bicycle-detail">
      {/* Display bicycle images, specifications, seller info */}
      <h2>{bicycle.title}</h2>
      {/* Other bicycle details */}
      <button className="inquiry-button">Inquire</button>
    </div>
  );
};

export default BicycleDetail;

