const { Composer } = require("telegraf");
const { Message } = require("../../model/Message");

const composer = new Composer();

const userTimers = {};
const actionsTypes = [
  "photo",
  "video",
  "text",
  "document",
  "audio",
  "voice",
  "video_note",
];
for (const type of actionsTypes) {
  composer.on(type, async (ctx) => {
    const msg = await ctx.telegram.forwardMessage(
      process.env.CHANNEL_ID,
      ctx.chat.id,
      ctx.message.message_id
    );
    await Message.create({
      user_id: ctx.chat.id,
      message_id: msg.message_id,
      folder_type: type,
    });

    if (userTimers[ctx.chat.id]) {
      clearTimeout(userTimers[ctx.chat.id]);
    }

    userTimers[ctx.chat.id] = setTimeout(async () => {
      await ctx.reply("Qabul qilindi ✅");
      delete userTimers[ctx.chat.id];
    }, 3000); // 3 soniya
  });
}

module.exports = { onMessage: composer };
