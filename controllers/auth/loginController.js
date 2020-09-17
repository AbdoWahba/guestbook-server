const bcrypt = require('bcrypt');
const User = require('../../models/Users');

module.exports = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    // .select('-password')
    .then((user) => {
      if (!user)
        return res.status(400).json({
          msg: `Invalid email or password`,
        });

      bcrypt.compare(password, user.password).then((validPass) => {
        if (!validPass)
          return res
            .status(400)
            .json({
              msg: `Invalid email or password`,
            })
            .catch((err) => console.log(err));

        let outUser = user.toObject();
        delete outUser['password'];

        const authToken = user.generateAuthTocken();

        return res.json({ user: outUser, authToken });
      });
    });
};
