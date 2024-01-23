const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const manualSchema = new Schema(
  {
    name: String,
    description: String,
    category: String,
    file_path: String,
    infra_id: {
      type: Schema.Types.ObjectId,
      ref: "Infra",
    },
    // status: Boolean,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Manual", manualSchema, "manual");
