const { Composer } = require("telegraf");
const { ACCEPTED_USERNAMES } = require("../../constants");
const { User } = require("../../model/User");

const composer = new Composer();

composer.use(async (ctx, next) => {
  if (ctx.chat.id < 0) return;
  if (!ctx.session.user) {
    let user = await User.findOne({
      telegram_id: ctx.chat.id,
    });
    if (!user) {
      user = await User.create({
        telegram_id: ctx.chat.id,
        roles: ["user"],
      });
      console.log("user created " + ctx.chat.id);
    }
    ctx.session.user = user;
  }
  next();
});

module.exports.isUser = composer;
