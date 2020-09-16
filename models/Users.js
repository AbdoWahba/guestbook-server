const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, minlength: 10, maxlength: 15, unique: true },
  dob: { type: Date },
  register_date: { type: Date, default: Date.now() },
});

module.exports = User = mongoose.model('user', UserSchema);
