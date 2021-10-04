const express = require('express');
const router = express.Router();

function validateUsername(username) {
  return username.length > 3;
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const passWordString = password.toString();
  return passWordString.length >= 4 && passWordString.length <= 8 && typeof(password) === 'number';
}

function generateToken(length){
  let a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  let b = [];  
  for (let i=0; i<length; i++) {
      let j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join("");
}

router.post('/register', (req, res) => {
  const {
    username,
    email,
    password
  } = req.body;

  if (validateUsername(username) && validateEmail(email) &&  validatePassword(password)) {
    return res.status(201).json({ message: 'user created' });
  }

  return res.status(400).json({ message: 'invalid data' });
})

router.post('/login', (req, res) => {
  const {
    email,
    password,
  } = req.body;

  if ( validateEmail(email) && validatePassword(password)) {
    const token = generateToken(12);
    return res.status(200).json({ token });
  }

  return res.status(400).json({ message: 'email or password is incorrect' });
})

module.exports = router;
