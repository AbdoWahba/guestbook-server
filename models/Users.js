const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/keys');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    set: (n) => {
      var splitStr = n.split(' ');
      for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] =
          splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
      }
      return splitStr.join(' ');
    },
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String },
  dob: { type: Date },
  register_date: { type: Date, default: Date.now() },
});

UserSchema.methods.generateAuthTocken = function () {
  const authToken = jwt.sign({ _id: this._id, email: this.email }, jwtSecret);

  return authToken;
};

module.exports = User = mongoose.model('user', UserSchema);
