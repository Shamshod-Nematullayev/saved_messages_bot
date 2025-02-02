const { Composer } = require("telegraf");

const composer = new Composer();

composer.command("delete", async (ctx) => {
  console.log(ctx.message);
});

module.exports = { onDelete: composer };
