const express = require('express');
const router = express.Router();
const User = require('../../Models/Users');
const auth = require('../../Middleware/auth');
const { check, validationResult } = require('express-validator');

//Get List of Users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (err) {
    return res.status(400).json({ msg: 'Server Error' });
  }
});

//Search Users
router.post(
  '/',
  [
    check('firstname', 'Please enter Firstname')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstname, lastname } = req.body;
    var users;
    try {
      if (firstname && lastname)
        users = await User.find(
          { firstname: firstname } && { lastname: lastname }
        );
      else if (firstname && !lastname) {
        users = await User.find({ firstname: firstname });
      }

      if (!users) {
        return res.status(400).json({ msg: 'No users found with that name' });
      }
      return res.status(200).json({ users });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
);

router.post(
  '/searchbystatus',
  [
    check('status', 'Please enter Status')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { status } = req.body;
    try {
      const users = await User.find({ status: status });

      if (!users) {
        return res
          .status(400)
          .json({ msg: 'No users found with ' + status + 'Status' });
      }
      return res.status(200).json({ users });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
);

module.exports = router;
