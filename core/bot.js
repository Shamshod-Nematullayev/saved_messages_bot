const { Telegraf } = require("telegraf");
const actions = require("./actions");
require("dotenv").config();
const LocalSession = require("telegraf-session-local");
const scenes = require("./scenes");
const composer = require("./middleware");

// Bot yaratish
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// Middleware'larni qo'shish
bot.use(new LocalSession({ database: "./session.json" }).middleware());
bot.use(scenes.middleware());
bot.use(composer.middleware());

// Barcha action'larni qo'shish
bot.use(actions);

// Xato boshqaruvi
bot.catch((err, ctx) => {
  console.error(`Bot xatosi: ${ctx.updateType}`, err);
  ctx.reply("Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.");
});

// Bot ishga tushirish
const startBot = async () => {
  try {
    await bot.launch(() => {
      console.log("Telegram serveriga muvaffaqiyatli ulandi");
    });
  } catch (error) {
    console.error("Bot ishga tushirishda xatolik:", error);
  }
};

// Bot to'xtatish
const stopBot = () => {
  bot.stop("SIGINT");
  console.log("Bot to'xtatildi");
};

module.exports = { bot, startBot, stopBot };
