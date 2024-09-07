const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Bio: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    Nationality: {
        type: String,
        required: true,
    },
    Major: {
        type: String,
        required: true,
    },
    Year: {
        type: Number,
        required: true,
    },
    University: {
        type: String,
        required: true,
    },
    DegreeType: {
        type: String,
        required: true,
    },
    SocialMediaType: {
        type: String,
        required: true,
    },
    SocialMediaLink: {
        type: String,
        required: true,
    },
},
);

//model
const User = mongoose.model("User", userSchema);

module.exports = User;