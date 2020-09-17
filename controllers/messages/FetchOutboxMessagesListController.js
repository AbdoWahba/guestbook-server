const Message = require('../../models/Messages');

module.exports = (req, res) => {
  Message.find({ auther: req.user._id })
    .populate('auther', 'name email')
    .sort('date')
    .then((msgs) => res.json({ msgs }));
};
