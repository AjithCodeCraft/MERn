const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jwt-auth');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});
mongoose.connection.on('error', (err) => {
  console.log('Failed to connect to MongoDB', err);
});
module.exports = mongoose;
