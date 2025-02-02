const { Markup } = require("telegraf");

module.exports.keyboards = {
  folders: Markup.keyboard([
    ["🖼 rasmlar", "🎞 videolar", "💬 matnlar"],
    ["🎧 musiqalar", "📄 fayllar"],
    ["📹 video xabarlar", "🎤 ovozli xabarlar"],
  ]).resize(),
};
