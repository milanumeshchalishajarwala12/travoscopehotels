const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

router.get('/', (req, res) => {
  res.json('Users route');
});

router.post(
  '/',
  [
    check('firstname', 'First name is required')
      .not()
      .isEmpty(),
    check('email', 'Valid email is required').isEmail(),
    check(
      'password',
      'Pleae enter a password with 6 or more character'
    ).isLength({ min: 8 })
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { firstname, lastname, email, password } = req.body;

      let user = await user.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: 'Invalid Credential' });
      }

      user = new User({
        firstname,
        lastname,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      //await user.save();
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtToken'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.msg);
      res.status(400).send('Server Error');
    }
  }
);

module.exports = router;
