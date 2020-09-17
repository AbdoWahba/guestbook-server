const bcrypt = require('bcrypt');
const User = require('../../models/Users');

module.exports = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (!user)
      return res.status(400).json({
        msg: `Invalid email or password`,
      });

    bcrypt.compare(password, user.password).then((validPass) => {
      if (!validPass)
        return res.status(400).json({
          msg: `Invalid email or password`,
        });

      return res.json({ msg: 'ok' });
    });
  });
};
