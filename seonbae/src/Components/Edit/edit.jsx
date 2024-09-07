import React, { useState } from 'react';
import './edit.css';

const InfoConfirmation = () => {
    const user = {
        name: "Your name",
        bio : "Hi!",
        age : "23",
        university: "Korea University",
        major: "Computer Science",
        nationality: "myanmar",
        degree: "Bachelor's",
        facebookProfile: "https://www.facebook.com/shoon.may.1804", 
        instagramProfile: "https://www.instagram.com/username",
      };

    return (
        <div className="container">
            <div className="text"> Your information </div>
            <div className='underline'></div>

            <div className="info-form">
                <div className="info-tab">
                    <label htmlFor="name"> Name </label>
                    <p id="name"> {user.name} </p>
                </div>
                <div className="info-tab">
                    <label htmlFor="Bio"> Bio </label>
                    <p id="Bio">{user.bio}</p>
                </div>
                <div className="info-tab">
                    <label htmlFor="age"> Age </label>
                    <p id="age">{user.age}</p>
                </div>
                <div className="info-tab">
                    <label htmlFor="nationality"> Nationality</label>
                    <p id="nationality">{user.nationality}</p>
                </div>
                <div className="info-tab">
                    <label htmlFor="degree"> Degree</label>
                    <p id="degree">{user.degree}</p>
                </div>
                <div className="info-tab">
                    <label htmlFor="university"> University </label>
                    <p id="university">{user.university}</p>
                </div>
                <div className="info-tab">
                    <label htmlFor="major"> Major </label>
                    <p id="major"> {user.major} </p>
                </div>
                <div className="info-tab">
                    <label htmlFor="socialmedia"> Social Media </label>
                    <p id="socialmedia"> {user.facebookProfile} / {user.instagramProfile} </p>
                </div>
            </div>
            <div className='btn-div'> 
                <button> Edit </button>
            </div>
            
            
        </div>
    );
}

export default InfoConfirmation;