const mongoose = require('mongoose');
const Users = require('./Users');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  parent_id: { type: String, required: true },
  post_date: { type: Date, default: Date.now() },
  list_receivers: { type: Array, required: true, minlength: 1 },
  auther: {
    type: Schema.Types.ObjectId,
    ref: Users,
    required: true,
  },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

module.exports = Message = mongoose.model('message', MessageSchema);
