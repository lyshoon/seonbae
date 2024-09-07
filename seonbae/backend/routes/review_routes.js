const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Review = require("../models/review");
const path = require('path');
const User = require("../models/users");

/**
 * @swagger
 * /api/reviews/WriteReview:
 *   post:
 *     summary: Write a review about a person
 *     description: This API endpoint allows a user to write a review about another person. The review includes the review text, the ID of the person writing the review, and the ID of the person being reviewed.
 *     tags:
 *       - Reviews
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ReviewText
 *               - PersonWhoWroteId
 *               - PersonToBeWrittenId
 *             properties:
 *               ReviewText:
 *                 type: string
 *                 description: The text of the review.
 *                 example: "This person is highly knowledgeable and helpful."
 *               PersonWhoWroteId:
 *                 type: ObjectId
 *                 description: The ID of the person writing the review.
 *                 example: 60d21b4667d0d8992e610c85
 *               PersonToBeWrittenId:
 *                 type: ObjectId
 *                 description: The ID of the person being reviewed.
 *                 example: 60d21b4667d0d8992e610c86
 *     responses:
 *       200:
 *         description: Review successfully written
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ReviewText:
 *                   type: string
 *                   example: "This person is highly knowledgeable and helpful."
 *                 PersonWhoWroteId:
 *                   type: string
 *                   example: 60d21b4667d0d8992e610c85
 *                 PersonToBeWrittenId:
 *                   type: string
 *                   example: 60d21b4667d0d8992e610c86
 *                 _id:
 *                   type: string
 *                   description: The unique ID of the review.
 *                   example: 60d21b4667d0d8992e610c87
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
router.post('/WriteReview', async (req, res) => {
    try{
        const { ReviewText, PersonWhoWroteId, PersonToBeWrittenId} = req.body;

        if(PersonWhoWroteId == PersonToBeWrittenId)
            return res.status(400).send("Error writing the comment.");

        const Writer = await User.findById({
            _id: new mongoose.Types.ObjectId(PersonWhoWroteId)});
        if(!Writer) 
            return res.status(400).send("Error writing the comment. The comment writter's ID is incorrect."); 
        
        const Receiver = await User.findById({
            _id: new mongoose.Types.ObjectId(PersonToBeWrittenId)});
        if(!Receiver) 
            return res.status(400).send("Error writing the comment. The comment reciever's ID is incorrect."); 

        const review = new Review({ReviewText, PersonWhoWroteId, PersonToBeWrittenId});

        await review.save();
        res.json(review);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

/**
 * @swagger
 * /api/reviews/GetAllCommentsbyReceiverID:
 *   get:
 *     summary: Get all comments (reviews) for a specific person by ID
 *     description: Retrieve all reviews written about a specific person based on their unique identifier (PersonToBeWrittenId).
 *     tags:
 *       - Reviews
 *     parameters:
 *       - in: query
 *         name: _id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the person whose reviews are being retrieved.
 *         example: "60d21b4667d0d8992e610c85"
 *     responses:
 *       200:
 *         description: Successfully retrieved a list of reviews for the specified person
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   ReviewText:
 *                     type: string
 *                     example: "Great person, very reliable."
 *                   PersonWhoWroteId:
 *                     type: string
 *                     example: "60d21b4667d0d8992e610c86"
 *                   PersonToBeWrittenId:
 *                     type: string
 *                     example: "60d21b4667d0d8992e610c85"
 *                   _id:
 *                     type: string
 *                     example: "60d21b4667d0d8992e610c87"
 *       404:
 *         description: No reviews found for the specified person
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "There is no comments."
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Internal server error"
 */
router.get('/GetAllCommentsbyReceiverID', async (req, res) => {
    try {
        const { _id } = req.query; // Get _id from the query string
        const reviews = await Review.find({
            PersonToBeWrittenId: new mongoose.Types.ObjectId(_id)
        });

        if (!reviews.length) return res.status(404).send("There is no comments.");

        res.json(reviews);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;