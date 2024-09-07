const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/users");
const path = require('path');

/**
 * @swagger
 * /api/users/Add:
 *   post:
 *     summary: Add a new user
 *     description: Creates a new user by providing details such as name, bio, age, nationality, and social media information.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 description: The name of the user.
 *                 example: John Doe
 *               Bio:
 *                 type: string
 *                 description: A brief bio of the user.
 *                 example: Software Engineer and technology enthusiast.
 *               Age:
 *                 type: integer
 *                 description: The age of the user.
 *                 example: 25
 *               Nationality:
 *                 type: string
 *                 description: The nationality of the user.
 *                 example: American
 *               Major:
 *                 type: string
 *                 description: The major or field of study.
 *                 example: Computer Science
 *               Year:
 *                 type: integer
 *                 description: The year of study or graduation.
 *                 example: 2024
 *               University:
 *                 type: string
 *                 description: The university the user is associated with.
 *                 example: MIT
 *               DegreeType:
 *                 type: string
 *                 description: The degree type (e.g., Bachelor's, Master's).
 *                 example: Bachelor's
 *               SocialMediaType:
 *                 type: string
 *                 description: The type of social media platform (e.g., LinkedIn, Twitter).
 *                 example: LinkedIn
 *               SocialMediaLink:
 *                 type: string
 *                 description: The URL to the user's social media profile.
 *                 example: https://linkedin.com/in/johndoe
 *     responses:
 *       200:
 *         description: Successfully added the user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The ID of the created user.
 *                 Name:
 *                   type: string
 *                   description: The name of the user.
 *                 Bio:
 *                   type: string
 *                   description: A brief bio of the user.
 *                 Age:
 *                   type: integer
 *                   description: The age of the user.
 *                 Nationality:
 *                   type: string
 *                   description: The nationality of the user.
 *                 Major:
 *                   type: string
 *                   description: The major or field of study.
 *                 Year:
 *                   type: integer
 *                   description: The year of study or graduation.
 *                 University:
 *                   type: string
 *                   description: The university the user is associated with.
 *                 DegreeType:
 *                   type: string
 *                   description: The degree type (e.g., Bachelor's, Master's).
 *                 SocialMediaType:
 *                   type: string
 *                   description: The type of social media platform.
 *                 SocialMediaLink:
 *                   type: string
 *                   description: The URL to the user's social media profile.
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 */
router.post('/Add', async (req, res) => {
    try{
        const { Name, Bio, Age, Nationality, Major, Year, University,
            DegreeType, SocialMediaType, SocialMediaLink
        } = req.body;
        const user = new User({ Name, Bio, Age, Nationality, Major, Year, University,
            DegreeType, SocialMediaType, SocialMediaLink });
        await user.save();
        res.json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;