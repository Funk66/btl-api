var mongoose = require('mongoose');
var User = mongoose.model('User');
var utils = require('utils');

exports.list = function(req, res) {
  User.distinct("UserName", function(err, users) {
    if (err) {
      return res.status(400).send({
        message: utils.errors.getErrorMessage(err)
      });
    } else {
      res.status(200).json(users);
    }
  });
}

exports.get = function(req, res) {
  res.status(200).json(req.data.user);
};

exports.findByID = function(req, res) {
  User.findOne({Id: id}, function(err, user) {
    if (err) return next(err);
    if (!user) return next(new Error('No user found with id ' + id));
    req.data = {
      user: user
    };
    next();
  });
};
