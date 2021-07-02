const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  username: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  isAdmin: { type: Boolean },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
