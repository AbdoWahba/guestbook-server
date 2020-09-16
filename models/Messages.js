const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  parent_id: { type: String, required: true },
  Post_date: { type: date, default: Date.now() },
  list_receivers: { type: Array, required: true, minlength: 1 },
  Auther: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: 15,
  },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

module.exports = User = mongoose.model('user', UserSchema);
