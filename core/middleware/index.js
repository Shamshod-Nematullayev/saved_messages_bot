const { Composer } = require("telegraf");
const { isUser } = require("./isUser");

const composer = new Composer();

composer.use(isUser.middleware());

module.exports = composer;
