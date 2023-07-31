var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var threadSchema = new Schema({
  prompts: [{ type: Schema.Types.ObjectId, ref: "Prompt" }],
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Thread", threadSchema);
