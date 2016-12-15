var mongoose = require('mongoose');
var Board = mongoose.model('Board');

exports.list = function(req, res) {
  Board.find().exec(function(err, boards) {
    if (err) {
      return res.status(400).send({
        message: errors.getErrorMessage(err)
      });
    } else {
      res.json(boards);
    }
  });
}

// Returns a board
exports.get = function(req, res) {
  res.status(200).json(req.data.board);
};

// Middleware to find boards by id
exports.findByID = function(req, res, next, id) {
  Board.findOne({Id: id}, function(err, board) {
    if (err) return next(err);
    if (!board) return next(new Error('No board found with id ' + id));
    req.data = {
      board: board
    };
    next()
  });
};
