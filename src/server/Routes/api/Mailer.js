const express = require('express');
const router = express.Router();
const app = express();
const nodemailer = require('nodemailer');
const axios = require('axios');

router.get('/', (req, res) => {
  res.send('Email route');
});

module.exports = router;
