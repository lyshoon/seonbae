import React, { useState } from 'react';
import './Review.css';

const Review = () => {

    const user ={
        name: 'testperson',
    }
    return (
        <div>
            <div className="container">
                <div className="title">
                    Please write your experience with {user.name}. 
                </div>
                <textarea className="review-box" placeholder='Write a review'/>
                <button type='sunmit'> Submit </button>

            </div>
        </div>
    );
}

export default Review;