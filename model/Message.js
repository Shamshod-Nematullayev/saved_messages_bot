const { Schema, model } = require("mongoose");

const schema = new Schema({
  user_id: {
    type: Number,
    required: true,
  },
  message_id: {
    type: Number,
    required: true,
  },
  folder_type: {
    type: String,
    enum: [
      "photo",
      "video",
      "link",
      "text",
      "document",
      "audio",
      "voice",
      "video_note",
    ],
    required: true,
  },
});

module.exports.Message = model("message", schema);
