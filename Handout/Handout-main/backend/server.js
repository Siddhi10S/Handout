const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
//const server = express();
const bodyParser = require('body-parser');
const User = require('./User');

// Create an instance of Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/contact-form', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Define a schema for the contact form data
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});

// Create a Mongoose model based on the schema
const Contact = mongoose.model('Contact', contactSchema);

// Middleware to parse JSON data in the request body
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
  });
  
// Route to handle form submission
app.post('/submit', (req, res) => {
  // Extract form data from the request body
  const { firstName, lastName, email, phone, message } = req.body;

  // Create a new Contact document
  const newContact = new Contact({
    firstName,
    lastName,
    email,
    phone,
    message,
  });

  // Save the contact form data to the database
  newContact.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving contact form data.');
    } else {
        
      res.status(200).send('Contact form data saved successfully.');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
