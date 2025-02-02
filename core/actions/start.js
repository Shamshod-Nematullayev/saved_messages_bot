const { Composer } = require("telegraf");
const { keyboards } = require("../lib/keyboards");

const composer = new Composer();
composer.start(async (ctx) => {
  await ctx.telegram.setMyCommands([
    { command: "start", description: "Botni ishga tushurish" },
    { command: "help", description: "Yordam olish" },
  ]);
  ctx.reply(
    "Xabarlarni saqlash uchun shunchaki ularni botga ulashing",
    keyboards.folders
  );
});

composer.command("help", (ctx) => {
  ctx.reply(
    `🔹 **Xabarlarni yuboring va bot ularni saqlab qo'yadi!**  
    🔸 **Qachonki kerak bo'lsa, tugmalar yordamida o'zingiz yuborgan xabarlarni qaytarib oling.**  
    🖼 **Rasm yuboring va u saqlanadi.**  
    🎞 **Video yuboring va u saqlanadi.**  
    💬 **Matnli xabarlar ham saqlanadi.**  
    📄 **Fayl yuboring va saqlanadi.**  
    🎧 **Musiqalarni saqlang va keyin eshitishingiz mumkin.**  
    🎤 **Ovozli xabarlarni saqlang.**  
    🎯 **Botga yuborgan xabarlar tugmalar orqali qaytariladi.**  

    Tugmalar yordamida saqlangan xabarlar orqali o'tish uchun tegishli bo'limni tanlang. Chat tarixini tozalab yuborsangiz ham bot sizga xabarlaringizni qaytarib beradi 😊`,
    { parse_mode: "Markdown" }
  );
});
module.exports.startAction = composer;
