const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const FormDataModel = require('./models/FormData');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://razzi:Razzi0984@cluster0.vuen418.mongodb.net/')
  .then(() => {
    console.log("Connected to MongoDB successfully!"); // Confirmation message
  })
  .catch(err => {
    console.error("MongoDB connection error:", err); // Log any connection errors
  });

// Registration route
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        res.json("Already registered");
      } else {
        FormDataModel.create(req.body)
          .then(log_reg_form => res.json(log_reg_form))
          .catch(err => res.json(err));
      }
    });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("Wrong password");
        }
      } else {
        res.json("No records found!");
      }
    });
});

// Start the server
app.listen(3001, () => {
  console.log("Server listening on http://127.0.0.1:3001");
});
