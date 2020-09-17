const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  parent_id: { type: String, required: true },
  Post_date: { type: date, default: Date.now() },
  list_receivers: { type: Array, required: true, minlength: 1 },
  Auther: {
    type: Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
  },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

module.exports = Message = mongoose.model('user', MessageSchema);
