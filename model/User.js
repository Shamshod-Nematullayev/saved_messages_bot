const { Schema, model } = require("mongoose");

const schema = new Schema({
  telegram_id: {
    type: Number,
    required: true,
  },
  roles: {
    type: [String],
    enum: ["admin", "user"],
    default: ["user"],
  },
});

module.exports.User = model("user", schema);
