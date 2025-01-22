const express = require('express');
const app = express();
const signupRoute = require('./routes/signup');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

// Configure CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

app.use(express.json());
app.use(bodyParser.json());
app.use('/user', signupRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
