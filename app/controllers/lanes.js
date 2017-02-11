var mongoose = require('mongoose');
var Lane = mongoose.model('Lane');
var utils = require('utils');

// Returns a list of all lanes
exports.list = function(req, res) {
  Lane.find({'Area': 'wip'}, {"_id": 0}, function(err, lanes) {
    if (err) {
      return res.status(400).send({
        message: utils.errors.getErrorMessage(err)
      });
    } else {
      res.json(lanes);
    }
  });
};

// Returns a given lane
exports.get = function(req, res) {
  res.json(req.data.lane);
};

// Middleware to find lanes by id
exports.findByID = function(req, res, next, id) {
  Lane.findOne({Id: id}, function(err, lane) {
    if (err) return next(err);
    if (!lane) return next(new Error('Failed to load lane ' + id));
    req.data = {
      lane: lane
    };
    next();
  });
};
