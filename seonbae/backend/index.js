// index.js

const express = require('express');
const app = express();
const port = 3000;

// A basic route to test the server
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
