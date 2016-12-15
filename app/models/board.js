var mongoose = require('mongoose');

var boardSchema = new mongoose.Schema({
  Id: Number,
  Title: String,
  AvailableTags: String,
  TopLevelLaneIds: Array,
  BacklogTopLevelLaneId: Number,
  ArchiveTopLevelLaneId: Number,
  Version: Number
});

mongoose.model('Board', boardSchema);
