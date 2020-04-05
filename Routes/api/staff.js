const express = require('express');
const router = express.Router();
const Staff = require('../../Models/Staff');
const { check, validationResult } = require('express-validator');
const auth = require('../../Middleware/auth');

//Add staff to database
router.post(
  '/',

  [
    check('name', 'Valid name not found')
      .not()
      .isEmpty(),

    check('contact', 'Valid contact number not found')
      .not()
      .isEmpty(),

    check('email', 'Valid email not found')
      .not()
      .isEmpty(),

    check('salary', 'Valid salary not found')
      .not()
      .isEmpty()
  ],

  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const {
        name,
        gender,
        doj,
        dol,
        department,
        isCurrentEmployee,
        salary,
        contact,
        email,
        dob,
        destination
      } = req.body;

      staff = new Staff({
        name,
        gender,
        doj,
        dol,
        isCurrentEmployee,
        department,
        salary,
        contact,
        email,
        dob,
        destination
      });

      if (isCurrentEmployee == true && dol) {
        return res
          .status(501)
          .send(
            'Invalid Entry, either employee is currently working or left the job'
          );
      }
      await staff.save();
      console.log('Employee added');
      return res.status(200).json({ NewEmployeeAdded: staff });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//Get Staff from database
router.get('/', async (req, res) => {
  try {
    const staff = await Staff.find().sort('name');
    if (staff.length > 0) {
      res.json(staff);
    } else {
      return res.json({ msg: 'No staff found' });
    }
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
});

//Get Staff from database by search

router.post('/search', async (req, res) => {
  try {
    const { destination, isCurrentEmployee } = req.body;
    var staff;
    if (isCurrentEmployee === true) {
      staff = await Staff.find({ destination, isCurrentEmployee }).sort('name');
    } else {
      staff = await Staff.find({ destination }).sort('name');
    }

    if (staff.length > 0) {
      res.json(staff);
    } else {
      res.json({ msg: 'No Results found' });
    }
  } catch (err) {
    return res.status(400).json({ msg: err.message });
  }
});

//Delete Staff

router.delete('/:id', async (req, res) => {
  const emp = await Staff.findById(req.params.id);
  const staff = await Staff.find();
  res.json({ EmployeeRemoved: emp });
  await emp.remove();
  res.json({ Staff: staff });
  console.log(staff);
});
module.exports = router;

//Update staff

router.post('/update/:id', async (req, res) => {
  try {
    let emp = await Staff.findOne({ staff: req.params._id });
    if (emp.isCurrentEmployee === true) {
      emp = await Staff.findOneAndUpdate(
        { staff: req.params._id },
        { $set: { isCurrentEmployee: false } },
        { new: true }
      );
      res.send(emp);
    } else {
      res.send(emp);
    }
  } catch (err) {
    res.send(err.message);
  }
});
