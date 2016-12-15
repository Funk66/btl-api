var mongoose = require('mongoose');

var laneSchema = new mongoose.Schema({
  Id: Number,
  Index: Number,
  Title: String,
  Width: Number,
  ParentLaneId: Number,
  ChildLaneIds: Array,
  Orientation: Number,
  LaneState: String
  //Station: {
    //type: mongoose.Schema.Types.ObjectId,
    //ref: 'stations'
  //}
});

laneSchema.virtual('Path').get(function () {
  return this.Title + '::path';
});

mongoose.model('Lane', laneSchema);
