const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Admin = require('../../Models/Admin');

router.post('/', async (req, res) => {
  try {
    const { loginid, password } = req.body;

    admin = new Admin({
      loginid,
      password
    });

    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash(password, salt);
    await admin.save();
    return res.status(200).send('Admin Registered');
  } catch (err) {
    console.log(err.message);
    return res.status(400).send('Server Error');
  }
});

module.exports = router;
