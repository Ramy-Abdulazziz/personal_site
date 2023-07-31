const mongoose = requre("Mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true, maxLength: 50 },
  threads: [{ type: Schema.Types.ObjectId, ref: "Thread" }],
});

module.exports = mongoose.model("User", userSchema);
