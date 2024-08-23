const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

//
app.get('/cart/:id([0-9]+)', (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

// Route for GET /available_payments
app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

// Route for POST /login
app.post('/login', (req, res) => {
  const userName = req.body.userName;
  res.send(`Welcome ${userName}`);
});

// Start the server on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
