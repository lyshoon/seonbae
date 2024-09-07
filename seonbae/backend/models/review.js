const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema(
  {
    ReviewText: {
        type: String,
    },
    PersonWhoWroteId: {
        type: String,
    },
    PersonToBeWrittenId: {
        type: String,
    }
},
);

//model
const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;