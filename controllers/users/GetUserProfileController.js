const User = require('../../models/Users');

module.exports = (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then((user) => res.json(user));
};
