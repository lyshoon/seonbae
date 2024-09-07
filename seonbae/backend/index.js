const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./swagger");
const userRoute = require("./routes/user_route");
const reviewRoute = require("./routes/review_routes");

const app = express();
const server = require("http").createServer();
const port = 8080;

app.use(cors({
  origin: 'http://localhost:3000' // Allow requests from frontend port
}));

app.use(express.json());
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api/users", userRoute);
app.use("/api/reviews", reviewRoute);

// A basic route to test the server
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

const connectDB = async () => {
  try{
    await mongoose.connect("mongodb+srv://khitmin1334:jYbxDdWFqOq4DpwC@cluster0.tudr6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=> { console.log("connected to MongoDB")});
  }
  catch(error){
    console.error("Error connecting to MongoDB:", error.message);
  }
}

connectDB();

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
