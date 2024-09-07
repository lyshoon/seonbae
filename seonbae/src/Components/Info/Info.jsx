import React from 'react';
import './Info.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; 

const Info = () => {
  
  const user = {
    name: "user",
    university: "Korea University",
    major: "Computer Science",
    nationality: "myanmar",
    degree: "Bachelor's",
    facebookProfile: "https://www.facebook.com/shoon.may.1804", 
    instagramProfile: "https://www.instagram.com/username",
  };

  return (
    <div className="info-container">
      <div className="info-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={user.name} readOnly />
        </div>
        <div className="form-group">
          <label>University:</label>
          <input type="text" value={user.university} readOnly />
        </div>
        <div className="form-group">
          <label>Major:</label>
          <input type="text" value={user.major} readOnly />
        </div>
        <div className="form-group">
          <label>Nationality:</label>
          <input type="text" value={user.nationality} readOnly />
        </div>
        <div className="form-group">
          <label>Degree:</label>
          <input type="text" value={user.degree} readOnly />
        </div>
      </div>

      <div className="social-media-icons">
        <a href={user.facebookProfile} target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href={user.instagramProfile} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
      </div>

      <div className="bottom-section">
        <button className="review-button">Leave a review</button>
      </div>
    </div>
  );
};

export default Info;
