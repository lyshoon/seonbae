import React, { useState, useEffect } from 'react';
import './edit.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const InfoConfirmation = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    
    const getUserbyId = async () => {
    try{
      const userid = sessionStorage.getItem("userId");

      const response = await axios.get(`http://localhost:8080/api/users/GetbyUserId/`, {
        params: { id: userid }}); 
      
      setUser(response.data);
      console.log(user);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getUserbyId();
  }, []);

    return (
        <>
        <div className="top-bar">
            <h1 className="logo">SeonBae</h1>
            <div className="user-controls">
            <button className="logout" onClick = {() => navigate('/')}>Log Out</button>
            <div className="profile-icon" onClick = {() => navigate('/user-edit')}>👤</div> 
            </div>
        </div>
        <div className="container">
            <div className="text"> Your information </div>
            <div className='underline'></div>

            <div className="info-form">
                <div className="info-tab">
                    <label htmlFor="name"> Name </label>
                    <p id="name"> {user.Name} </p>
                </div>
                <div className="info-tab">
                    <label htmlFor="Bio"> Bio </label>
                    <p id="Bio">{user.Bio}</p>
                </div>
                <div className="info-tab">
                    <label htmlFor="age"> Age </label>
                    <p id="age">{user.Age}</p>
                </div>
                <div className="info-tab">
                    <label htmlFor="nationality"> Nationality</label>
                    <p id="nationality">{user.Nationality}</p>
                </div>
                <div className="info-tab">
                    <label htmlFor="degree"> Degree</label>
                    <p id="degree">{user.Year}</p>
                </div>
                <div className="info-tab">
                    <label htmlFor="university"> University </label>
                    <p id="university">{user.University}</p>
                </div>
                <div className="info-tab">
                    <label htmlFor="major"> Major </label>
                    <p id="major"> {user.Major} </p>
                </div>
                <div className="info-tab">
                    <label htmlFor="socialmedia"> Social Media </label>
                    <p id="socialmedia"> {user.SocialMediaLink} / {user.instagramProfile} </p>
                </div>
            </div>
            <div className='btn-div'> 
                <button onClick = {() => navigate('/profile-edit')}> Edit </button>
            </div>
            
            
        </div>
        </>
    );
}

export default InfoConfirmation;