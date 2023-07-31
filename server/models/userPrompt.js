const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userPromptSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  timeStamp: { type: Date, default: Date.now() },
  thread: { type: Schema.Types.ObjectId, ref: "Thread" },
});

module.exports = mongoose.model("Prompt", userPromptSchema);
