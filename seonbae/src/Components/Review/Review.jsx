import React, { useState } from 'react';
import './Review.css';
import { useNavigate } from 'react-router-dom';

const Review = () => {
    const navigate = useNavigate();

    const user ={
        name: 'testperson',
    }
    return (
        <>
        <div className="top-bar">
            <h1 className="logo">SeonBae</h1>
            <div className="user-controls">
            <button className="logout" onClick = {() => navigate('/')}>Log Out</button>
             <div className="profile-icon" onClick = {() => navigate('/user-edit')}>👤</div> 
            </div>
        </div>
        <div>
            <div className="container">
                <div className="title">
                    Please write your experience with {user.name}. 
                </div>
                <textarea className="review-box" placeholder='Write a review'/>
                <button type='sunmit'> Submit </button>

            </div>
        </div>
        </>
    );
}

export default Review;