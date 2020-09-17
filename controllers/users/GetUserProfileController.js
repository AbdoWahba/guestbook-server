const User = require('../../models/Users');

module.exports = (req, res) => {
  User.findById(req.user._id)
    .select('-password')
    .then((user) => {
      if (!user) return res.status(404).json({ msg: 'user not found' });
      return res.json({ user });
    });
};
