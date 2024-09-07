import React from 'react';
import './Info.css';

const Info = () => { 
  return (
    <div className="info-container">
      <div className="info-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value="sss" readOnly />
        </div>
        <div className="form-group">
          <label>University:</label>
          <input type="text" value="Kyung Hee University" readOnly />
        </div>
        <div className="form-group">
          <label>Major:</label>
          <input type="text" value="Software Engineering" readOnly />
        </div>
        <div className="form-group">
          <label>Nationality:</label>
          <input type="text" value="Myanmar" readOnly />
        </div>
      </div>

      <div className="bottom-section">
        <button className="notify-button">
          Notify the user to let them know you added them on their social media
        </button>
        <button className="review-button">Leave a review</button>
      </div>
    </div>
  );
};

export default Info; 
