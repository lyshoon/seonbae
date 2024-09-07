const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/users");
const path = require('path');

/**
 * @swagger
 * /api/users/SignUp:
 *   post:
 *     summary: Register a new user with email and password
 *     description: This API endpoint allows a user to sign up by providing an email and password. The user's data is saved to the database.
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
 *             properties:
 *               Email:
 *                 type: string
 *                 description: The email address of the user.
 *                 example: johndoe@example.com
 *               Password:
 *                 type: string
 *                 description: The password for the user's account.
 *                 example: securepassword123
 *     responses:
 *       200:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique ID of the user.
 *                   example: 60d21b4667d0d8992e610c85
 *                 Email:
 *                   type: string
 *                   description: The email of the registered user.
 *                   example: johndoe@example.com
 *                 Password:
 *                   type: string
 *                   description: The hashed password of the user.
 *                   example: "$2b$10$EIX/..."
 *       500:
 *         description: Server error
 */
router.post('/SignUp', async (req, res) => {
    try{
        const { Email, Password} = req.body;

        const userTest = await User.findOne({
            Email
        });

        if (userTest) return res.status(400).send("A user has already signed up with this email. Try to log in.");

        const user = new User({ Email, Password});
        await user.save();
        res.json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
})

/**
 * @swagger
 * /api/users/AddInformationbyUserId:
 *   patch:
 *     summary: Update user information by user ID
 *     description: This API endpoint allows users to update their profile information by providing a user ID and the fields they want to update.
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The unique ID of the user to update.
 *                 example: 60d21b4667d0d8992e610c85
 *               Name:
 *                 type: string
 *                 description: The full name of the user.
 *                 example: John Doe
 *               Bio:
 *                 type: string
 *                 description: A short biography of the user.
 *                 example: "Software Developer and Open Source Enthusiast"
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
 *         description: User information successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   description: The unique ID of the user.
 *                   example: 60d21b4667d0d8992e610c85
 *                 Email:
 *                   type: string
 *                   description: The email of the user.
 *                   example: johndoe@example.com
 *                 Name:
 *                   type: string
 *                   description: The updated name of the user.
 *                   example: John Doe
 *                 Bio:
 *                   type: string
 *                   description: The updated bio of the user.
 *                   example: "Software Developer and Open Source Enthusiast"
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message if the user is not found.
 *                   example: user not found
 *       500:
 *         description: Server error
 */
router.patch('/AddInformationbyUserId', async (req, res) => {
    try {
        const { userId, Name, Bio, Age, Nationality, Major, Year, University, SocialMediaType, SocialMediaLink } = req.body;

        const updateFields = {
            ...(Name && { Name }),
            ...(Bio && { Bio }),
            ...(Age && { Age }),
            ...(Nationality && { Nationality }),
            ...(Major && { Major }),
            ...(Year && { Year }),
            ...(University && { University }),
            ...(SocialMediaType && { SocialMediaType }),
            ...(SocialMediaLink && { SocialMediaLink }),
        };

        const user = await User.findOneAndUpdate(
            { _id: new mongoose.Types.ObjectId(userId) },
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        if (!user) {
            return res.status(404).json({ error: 'user not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

/**
 * @swagger
 * /api/users/LogIn:
 *   post:
 *     summary: Log in a user with email and password
 *     description: This API endpoint allows a user to log in by providing their email and password. The server checks if the email exists and if the password is correct.
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
 *             properties:
 *               Email:
 *                 type: string
 *                 description: The email address of the user.
 *                 example: johndoe@example.com
 *               Password:
 *                 type: string
 *                 description: The password of the user's account.
 *                 example: securepassword123
 *     responses:
 *       200:
 *         description: User successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: The unique ID of the user.
 *                       example: 60d21b4667d0d8992e610c85
 *                     Email:
 *                       type: string
 *                       description: The email of the logged-in user.
 *                       example: johndoe@example.com
 *                     Password:
 *                       type: string
 *                       description: The hashed password of the user.
 *                       example: "$2b$10$EIX/..."
 *       400:
 *         description: User not found
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "User not found!"
 *       404:
 *         description: Incorrect password
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: "Password is incorrect"
 *       500:
 *         description: Server error
 */
router.post('/LogIn', async (req, res) => {
    const {
      Email,
      Password
    } = req.body;
  
    const user = await User.findOne({
        Email
    });
  
    if (!user) return res.status(404).send("User not found!");
  
    if (user.Password != Password) return res.status(404).send("Password is incorrect")
  
    res.send({user});
  });

/**
 * @swagger
 * /api/users/GetAllUsers:
 *   get:
 *     summary: Retrieve a list of all users
 *     description: Fetch all users from the database.
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "60d21b4667d0d8992e610c85"
 *                   Name:
 *                     type: string
 *                     example: "John Doe"
 *                   Email:
 *                     type: string
 *                     example: "johndoe@example.com"
 *                   Age:
 *                     type: number
 *                     example: 25
 *                   Nationality:
 *                     type: string
 *                     example: "American"
 *                   Major:
 *                     type: string
 *                     example: "Computer Science"
 *                   University:
 *                     type: string
 *                     example: "Harvard University"
 *                   DegreeType:
 *                     type: string
 *                     example: "Bachelor's"
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
router.get('/GetAllUsers', async (req, res) => {
    try{
        const users = await User.find();

        res.status(200).json(users);
    }catch(error){
        res.status(500).json(error);
    }
})

/**
 * @swagger
 * /api/users/GetbyUserId:
 *   get:
 *     summary: Get user by user ID
 *     description: Retrieve user details based on their unique identifier (user ID).
 *     tags:
 *       - Users
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to retrieve.
 *         example: "60d21b4667d0d8992e610c85"
 *     responses:
 *       200:
 *         description: User data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "60d21b4667d0d8992e610c85"
 *                 Name:
 *                   type: string
 *                   example: "John Doe"
 *                 Email:
 *                   type: string
 *                   example: "johndoe@example.com"
 *                 Age:
 *                   type: number
 *                   example: 25
 *                 Nationality:
 *                   type: string
 *                   example: "American"
 *                 Major:
 *                   type: string
 *                   example: "Computer Science"
 *                 University:
 *                   type: string
 *                   example: "Harvard University"
 *                 DegreeType:
 *                   type: string
 *                   example: "Bachelor's"
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: "User not found!"
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
router.get('/GetbyUserId', async (req, res) => {
    try{
        const {id} = req.query;

        const user = await User.findById({
            _id: new mongoose.Types.ObjectId(id)
        });

        if(!user) return res.status(404).json("User not found!");

        res.json(user);
    }catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;