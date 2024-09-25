const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const User = require('./User');

// Paste your mongoDB project key below before running the server...

const mongoURI = "mongodb+srv://rutujajadhav1103:Rutuja$11@cluster0.toihcza.mongodb.net/handout_website?retryWrites=true&w=majority";

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// To add CSS Files

app.use('/public', express.static(path.join(__dirname, '..', 'public')));
app.use('/images', express.static(path.join(__dirname, '..', 'images')));

// Server connection

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected Successfully");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

// Get Routes

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'signup.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'login.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'contact.html'));
});

app.get('/donate', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'donate.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'About.html'));
});

// Post Routes

app.post('/createuser', async (req, res) => {
  const data = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };

  const check = await User.findOne({ username: req.body.username });
  console.log(check);

  if (check != null) {
    console.log("User is already registered!")
    // res.redirect("/");
    // return;
  }
  else {
    console.log(data);
    await User.create(data);
    console.log("New User created!");
  }
  res.redirect("/");
});


// app.post('/contact', async (req, res) => {
//   try {
//     const check = await User.findOne({ username: req.body.username });
//     console.log(check);

//     if (!check) {
//       console.log("Enter Valid Username!");
//       res.send("Enter Valid Username");
//       return;
//     } else {
//       if (check.get('password') === req.body.password) {
//         res.send("Logged in");
//       } else {
//         res.send("Enter Valid Password");
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send("Server Error");
//   }
//   res.redirect("/");
// });

app.post('/loginuser', async (req, res) => {
  try {
    const check = await User.findOne({ username: req.body.username });
    console.log(check);

    if (!check) {
      console.log("Enter Valid Username!");
      res.send("Enter Valid Username");
      return;
    } else {
      if (check.get('password') === req.body.password) {
        res.send("Logged in");
      } else {
        res.send("Enter Valid Password");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
  res.redirect("/");
});


app.post('/contact', async (req, res) => {
  try {
    const check = await User1.findOne({ username: req.body.username });
    console.log(check);

    if (!check) {
      console.log("Enter Valid Username!");
      res.send("Enter Valid Username");
      return;
    } else {
      if (check.get('password') === req.body.password) {
        res.send("Logged in");
      } else {
        res.send("Enter Valid Password");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
  res.redirect("/");
});


// Server is listeing

app.listen(3000, () => {
  console.log("Server is running at port 3000...");
  mongoDB();
});