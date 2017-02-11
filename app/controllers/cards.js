var mongoose = require('mongoose');
var Card = mongoose.model('Card');
var Event = mongoose.model('Event');
var utils = require('utils');

// Returns a list of all cards
exports.list = function(req, res) {
  Card.find().exec(function(err, cards) {
    if (err) {
      return res.status(400).send({
        message: utils.errors.getErrorMessage(err)
      });
    } else {
      res.status(200).json(cards);
    }
  });
};

// Returns a given card with its history
exports.get = function(req, res) {
  var card = req.data.card;
  Event.find({CardId: card.Id}).sort({Position: 1}).exec(function(err, events) {
    if (err) {
      return res.status(400).send({
        message: utils.errors.getErrorMessage(err)
      });
    } else {
      res.status(200).json({card: card, history: events});
    }
  });
};

// Middleware to find cards by id
exports.findByID = function(req, res, next, id) {
  Card.findOne({Id: id}, function(err, card) {
    if (err) return next(err);
    if (!card) return next(new Error('No card found with id ' + id));
    req.data = {
      card: card
    };
    next();
  });
};
