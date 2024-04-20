require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.error("MongoDB connection error:", err));

const users = [
  {
    email: "user1@example.com",
    password: "password1",
    fullName: "User One"
  },
  {
    email: "user2@example.com",
    password: "password2",
    fullName: "User Two"
  },
  {
    email: "user3@example.com",
    password: "password3",
    fullName: "User Three"
  },
  {
    email: "ivan@gmail.com",
    password: "123",
    fullName: "Ivan"
  }
];

const insertUsers = async () => {
  try {
    await User.deleteMany();
    await User.insertMany(users);
    console.log('Users Imported Successfully');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error with user import', error);
    mongoose.disconnect();
  }
};

insertUsers();
