const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');

module.exports = (req, res, next) => {
  const authToken = req.header('x-auth-token');
  if (!authToken)
    return res.status(401).json({ msg: 'Access denied, please sign in' });

  try {
    const decode = jwt.verify(authToken, jwtSecret);
    res.user = decode;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Invalid Token' });
  }
};
