const express = require('express');
const router = express.Router();
const User = require('../../Models/Users');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({ users });
  } catch (err) {
    return res.status(400).json({ msg: 'Server Error' });
  }
});

module.exports = router;
