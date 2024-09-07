import React, {useEffect, useState} from 'react';
import './Info.css';
import axios from 'axios';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; 

const Info = () => { 

  const [user, setUser] = useState([]);
  const getUserbyId = async () => {
    try{
      const userid = sessionStorage.getItem("selectedUserId");

      const response = await axios.get(`http://localhost:8080/api/users/GetbyUserId/`, {
        params: { id: userid }}); 
      
      setUser(response.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getUserbyId();
  }, []);

  return (
    <div className="info-container">
      <div className="info-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={user.Name} readOnly />
        </div>
        <div className="form-group">
          <label>University:</label>
          <input type="text" value={user.University} readOnly />
        </div>
        <div className="form-group">
          <label>Major:</label>
          <input type="text" value={user.Major} readOnly />
        </div>
        <div className="form-group">
          <label>Nationality:</label>
          <input type="text" value={user.Nationality}readOnly />
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
