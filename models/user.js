const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: String,
    password: String,
    email: String,
    userRole_id: {
      type: Schema.Types.ObjectId,
      ref: "User_role",
    },
    status: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema, "user");
