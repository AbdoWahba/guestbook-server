const Message = require('../../models/Messages');

module.exports = (req, res) => {
  const newMessage = Message({ ...req.body, auther: req.user._id });
  newMessage
    .save()
    .then((msg) =>
      res.json({ status: 'success', msg: 'your Message is sent' })
    );
};
