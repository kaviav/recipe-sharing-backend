mongoose = require("mongoose");
Schema = mongoose.Schema;

const connectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  callback: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Connect", connectSchema);
