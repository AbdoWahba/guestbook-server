const Message = require('../../models/Messages');

module.exports = (req, res) => {
  Message.find({ list_receivers: { $in: [req.user.email] } })
    .populate('auther', 'name email')
    .sort('date')
    .then((msgs) => res.json({ msgs }));
};
