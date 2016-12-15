var mongoose = require('mongoose');

var cardSchema = new mongoose.Schema({
  Id: Number,
  Title: String,
  Size: Number,
  TypeId: Number,
  TypeName: String,  // ref to card types - populate()
  Tags: String,
  LastMove: Date,
  LastActivity: Date,
  ExternalCardID: String,
  Color: String,
  Priority: Number,
  PriorityText: String,
  AssignedUserId: Number,
  AssignedUserName: String,  // ref to users - populate()
  IsBlocked: Boolean,
  BlockReason: String,
  BoardId: Number,
  ClassOfServiceId: Number,
  ClassOfServiceTitle: String,  // ref to classes of services - populate()
  LastUpdate: Date
});

mongoose.model('Card', cardSchema);
