const express = require('express');
const router = express.Router();
const axios = require('axios');

function validateToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization && authorization.length !== 12) {
    return res.status(401).json({ message: 'invalid token' });
  }

  next();
}

router.get('/price', validateToken, async  (_req, res, _next) => {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/BTC.json');
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
})

module.exports = router;
