const express = require('express');

const app = express();
const port = 1245;

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
