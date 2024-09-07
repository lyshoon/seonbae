const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/users");
const path = require('path');

/**
 * @swagger
 * /api/users/SignUp:
 *   post:
 *     summary: Register a new user with a detailed profile
 *     description: This API endpoint allows a user to sign up by providing their email, password, and additional profile information such as name, bio, age, and social media details.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - Email
 *               - Password
 *               - Name
 *               - Age
 *               - Major
 *               - Year
 *               - University
 *               - DegreeType
 *             properties:
 *               Email:
 *                 type: string
 *                 description: The email address of the user.
 *                 example: johndoe@example.com
 *               Password:
 *                 type: string
 *                 description: The password for the user's account.
 *                 example: securepassword123
 *               Name:
 *                 type: string
 *                 description: The full name of the user.
 *                 example: John Doe
 *               Bio:
 *                 type: string
 *                 description: A brief biography of the user.
 *                 example: "Software Developer and Open Source Enthusiast"
 *               Age:
 *                 type: integer
 *                 description: The user's age.
 *                 example: 25
 *               Nationality:
 *                 type: string
 *                 description: The nationality of the user.
 *                 example: American
 *               Major:
 *                 type: string
 *                 description: The academic major of the user.
 *                 example: Computer Science
 *               Year:
 *                 type: string
 *                 description: The current academic year of the user.
 *                 example: 1
 *               University:
 *                 type: string
 *                 description: The university the user attends.
 *                 example: Stanford University
 *               DegreeType:
 *                 type: string
 *                 description: The type of degree the user is pursuing.
 *                 example: Bachelor's
 *               SocialMediaType:
 *                 type: string
 *                 description: The type of social media platform.
 *                 example: LinkedIn
 *               SocialMediaLink:
 *                 type: string
 *                 description: The URL of the user's social media profile.
 *                 example: https://www.linkedin.com/in/johndoe
 *     responses:
 *       200:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Email:
 *                   type: string
 *                   description: The email of the registered user.
 *                   example: johndoe@example.com
 *                 Name:
 *                   type: string
 *                   description: The name of the registered user.
 *                   example: John Doe
 *                 Bio:
 *                   type: string
 *                   description: The bio of the registered user.
 *                   example: "Software Developer and Open Source Enthusiast"
 *       500:
 *         description: Server error
 */
router.post('/SignUp', async (req, res) => {
    try{
        const { Email, Password, Name, Bio, Age, Nationality, Major, Year, University,
            DegreeType, SocialMediaType, SocialMediaLink} = req.body;
        const user = new User({ Email, Password,Name, Bio, Age, Nationality, Major, Year, University,
            DegreeType, SocialMediaType, SocialMediaLink });
        await user.save();
        res.json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;