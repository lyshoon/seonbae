import React, {useEffect, useState} from 'react';
import './Info.css';
import axios from 'axios';

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
