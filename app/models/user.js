var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  Id: Number,
  UserName: String,
  Password: String,
  FullName: String,
  RoleName: String,
  EmailAddress: String,
  GravatarLink: String,
  Enabled: Boolean,
  LastUpdate: Date
});

module.exports = mongoose.model('User', userSchema);
