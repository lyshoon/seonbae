import React, { useState } from 'react';
import './Review.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Review = () => {

    const [review, setReview] = useState("");
    const ReceiverName = sessionStorage.getItem("selectedUserName");
    const WriterId = sessionStorage.getItem("userId");
    const ReceiverId = sessionStorage.getItem("selectedUserId");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try{
            const response = await axios.post('http://localhost:8080/api/reviews/WriteReview', {
                ReviewText: review, 
                PersonWhoWroteId: WriterId, 
                PersonToBeWrittenId: ReceiverId
            });

            navigate('/home-page');
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div>
            <div className="container">
                <div className="title">
                    Please write your experience with {ReceiverName}. 
                </div>
                <textarea className="review-box" placeholder='Write a review' value = {review} onChange={(e)=> setReview(e.target.value)}/>
                <button type='sunmit' onClick = {() => handleSubmit()}> Submit </button>

            </div>
        </div>
    );
}

export default Review;