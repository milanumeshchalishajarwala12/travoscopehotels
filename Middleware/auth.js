const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    res.status(401).json({ msg: 'Token not found, auhorization denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtToken'));
    req.admin = decoded.admin;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
