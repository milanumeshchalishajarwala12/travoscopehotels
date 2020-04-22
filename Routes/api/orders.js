const express = require('express');
const router = express.Router();
const Order = require('../../Models/Order');
const Location = require('../../Models/Location');

router.post('/', async (req, res) => {
  try {
    const result = await Order.find({
      destination: req.body.destination,
      isComplete: false,
    });
    var orderarray = [];
    result.map((order) => {
      var obj;
      var od = order.orderdetails;
      var roomno = order.roomnumber;
      obj = {
        roomnumber: roomno,
        orderdetails: od,
      };
      orderarray.push(obj);
    });

    return res.json({ orderarray });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

router.post('/update', async (req, res) => {
  const { Item1, Item2, Item3, Item4, Item5, Item6 } = req.body;
  var d_name = 'Seattle, WA';
  const result = await Location.findOne({ name: d_name });
  await result.updateOne({
    Item1: Item1,
    Item2: Item2,
    Item3: Item3,
    Item4: Item4,
    Item5: Item5,
    Item6: Item6,
  });
  return res.status(200).json(result);
});

router.get('/items', async (req, res) => {
  var d_name = 'Seattle, WA';
  const result = await Location.findOne({ name: d_name });
  return res.status(200).json(result);
});

router.post('/complete', async (req, res) => {
  const { roomnumber, orderdetails } = req.body;
  try {
    const order = await Order.findOne({
      roomnumber: roomnumber,
      orderdetails: orderdetails,
    });
    var compval = true;
    await order.updateOne({ isComplete: compval });
    return res.json({ order });
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;
