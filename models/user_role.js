const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userRoleSchema = new Schema(
  {
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User_role", userRoleSchema, "user_role");
