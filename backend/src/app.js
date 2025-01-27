const express = require('express');
const app = express();
const signupRoute = require('./routes/signup');
const loginRoute = require("./routes/login");
const userRoute = require('./routes/user');
const bodyParser = require('body-parser');
const cors = require('cors');
const createAdminAccount = require("./scripts/admin");
const PORT = process.env.PORT || 5000;

// Configure CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
}));

app.use(express.json());
app.use(bodyParser.json());

createAdminAccount();

app.use('/user', signupRoute);
app.use("/auth", loginRoute);
app.use('/api',userRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
