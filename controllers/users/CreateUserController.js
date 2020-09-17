const bcrypt = require('bcrypt');
const User = require('../../models/Users');

module.exports = (req, res) => {
  const { name, email, password } = req.body;
  User.findOne({ email }).then((user) => {
    if (user)
      return res.status(400).json({
        msg: `this email ${email} is already exist \n try to sign in instead`,
      });
  });

  const newUser = new User({ name, email, password });

  bcrypt
    .genSalt(10)
    .then((salt) => bcrypt.hash(newUser.password, salt))
    .then((hash) => {
      newUser.password = hash;
      newUser.save().then((user) => {
        const authToken = user.generateAuthTocken();

        res
          .header('x-auth-token', authToken)
          .json({ id: user.id, name: user.name, email: user.email });
      });
    })
    .catch((err) => console.log(err));
};
