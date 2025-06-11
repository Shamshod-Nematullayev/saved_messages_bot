const { Telegraf } = require("telegraf");
const actions = require("./actions");
require("dotenv").config();
const LocalSession = require("telegraf-session-local");
const scenes = require("./scenes");
const composer = require("./middleware");
const express = require("express");

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// Session, scene va middleware’lar
bot.use(new LocalSession({ database: "./session.json" }).middleware());
bot.use(scenes.middleware());
bot.use(composer.middleware());
bot.use(actions);

// Xatoliklarni tutish
bot.catch((err, ctx) => {
  console.error(`Bot xatosi: ${ctx.updateType}`, err);
  ctx.reply("Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.");
});

// Webhook URL (Telegram shunga yuboradi)
const WEBHOOK_PATH = `/bot${process.env.TELEGRAM_TOKEN}`;
const WEBHOOK_URL = `${process.env.WEBHOOK_DOMAIN}${WEBHOOK_PATH}`;

// Botni ishga tushirish
const startBot = async () => {
  const fs = require("fs");
  const https = require("https");
  if (process.env.NODE_ENV === "production") {
    const app = express();
    app.use(express.json());

    // Expressga webhook endpoint qo'shamiz
    app.use(bot.webhookCallback(WEBHOOK_PATH));

    const options = {
      key: fs.readFileSync("./ssl/key.pem"),
      cert: fs.readFileSync("./ssl/cert.pem"),
    };

    // Telegramga webhook URL ni ro'yxatdan o'tkazamiz
    await bot.telegram.setWebhook(WEBHOOK_URL, {
      certificate: {
        source: fs.readFileSync("./ssl/cert.pem"),
      },
    });

    const port = process.env.PORT || 8443;
    https.createServer(options, app).listen(port, () => {
      console.log(`🚀 Production: Webhook server ${port}-portda ishlayapti`);
    });
  } else {
    // Development uchun polling
    bot.launch();
    console.log("🔧 Development: Bot polling orqali ishga tushdi");
  }
};

// Botni to'xtatish (CTRL+C)
const stopBot = () => {
  bot.stop("SIGINT");
  console.log("⛔ Bot to'xtatildi");
};

module.exports = { bot, startBot, stopBot };
