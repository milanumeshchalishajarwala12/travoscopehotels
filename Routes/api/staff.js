const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const Staff = require('../../Models/Staff');

router.post('/', async (req, res) => {
  try {
    const { loginid, password, destination } = req.body;

    staff = new Staff({
      loginid,
      password,
      destination,
    });

    const salt = await bcrypt.genSalt(10);
    staff.password = await bcrypt.hash(password, salt);
    await staff.save();
    return res.status(200).send('Staff Registered');
  } catch (err) {
    console.log(err.message);
    return res.status(400).send('Server Error');
  }
});
module.exports = router;
