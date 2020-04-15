const express = require('express');
const router = express.Router();
const Order = require('../../Models/Order');

router.post('/', async (req, res) => {
  const { destination, roomnumber, orderdetails, total, orderdate } = req.body;
  try {
    order = new Order({
      destination,
      roomnumber,
      orderdetails,
      total,
      orderdate
    });
    await order.save();
    return res.status(200).json({ order });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await Order.find({ destination: req.body.destination });
    var orderarray = [];
    result.map(order => {
      var obj;
      var od = order.orderdetails;
      var roomno = order.roomnumber;
      obj = {
        roomnumber: roomno,
        orderdetails: od
      };
      orderarray.push(obj);
    });

    return res.send(orderarray);
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

module.exports = router;
