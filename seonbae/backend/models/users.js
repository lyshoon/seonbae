const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    Email: {
        type: String,
    },
    Password: {
        type: String,
    },
    Name: {
      type: String,
    },
    Bio: {
        type: String,
    },
    Age: {
        type: Number,
    },
    Nationality: {
        type: String,
    },
    Major: {
        type: String,
    },
    Year: {
        type: Number,
    },
    University: {
        type: String,
    },
    DegreeType: {
        type: String,
    },
    SocialMediaType: {
        type: String,
    },
    SocialMediaLink: {
        type: String,
    },
},
);

//model
const User = mongoose.model("User", userSchema);

module.exports = User;