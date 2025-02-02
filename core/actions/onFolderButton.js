const { Composer } = require("telegraf");
const { Message } = require("../../model/Message");

const composer = new Composer();
const folders = [
  { label: "🖼 rasmlar", folder: "photo" },
  { label: "🎞 videolar", folder: "video" },
  { label: "💬 matnlar", folder: "text" },
  { label: "📄 fayllar", folder: "document" },
  { label: "🎧 musiqalar", folder: "audio" },
  { label: "🎤 ovozli xabarlar", folder: "voice" },
  { label: "📹 video xabarlar", folder: "video_note" },
];

composer.hears(
  [
    "🖼 rasmlar",
    "🎞 videolar",
    "💬 matnlar",
    "📄 fayllar",
    "🎧 musiqalar",
    "🎤 ovozli xabarlar",
    "📹 video xabarlar",
  ],
  async (ctx) => {
    const messages = await Message.find({
      user_id: ctx.chat.id,
      folder_type: folders.find((folder) => folder.label === ctx.message.text)
        .folder,
    });
    if (!messages.length) {
      return ctx.reply("Bu kategoriyada bo'yicha xabarlar yo'q.");
    }
    for (const msg of messages) {
      await ctx.telegram.forwardMessage(
        ctx.chat.id,
        process.env.CHANNEL_ID,
        msg.message_id
      );
    }
  }
);

module.exports = { onFolderButton: composer };
