// const mongoose = require("mongoose");
const { startBot } = require("./core/bot");
const { connectDB } = require("./utils/connectDB");
require("dotenv").config();

// Boshqa kerakli importlar...

// MongoDB ga ulanish
connectDB().then(() => {
  // Bot va boshqa funksionallikni ishga tushirish kodi...
  startBot();
});
