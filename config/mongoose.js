var mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect('mongo/kanban');
  require('../app/models');
  return db;
};
