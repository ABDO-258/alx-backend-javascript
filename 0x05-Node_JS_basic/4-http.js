const http = require('http');

// Define the request handler
const app = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');
  // Respond with "Hello Holberton School!" for any request
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});
// listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

module.exports = app;
