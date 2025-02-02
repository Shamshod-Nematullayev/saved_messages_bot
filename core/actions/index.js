const { Composer } = require("telegraf");
const { startAction } = require("./start");
const { onFolderButton } = require("./onFolderButton");
const { onMessage } = require("./onMessage");
const { onDelete } = require("./onDelete");

// Boshqa composerlarni ham shu yerda import qiling

const actionComposer = new Composer();

actionComposer.use(startAction);
actionComposer.use(onFolderButton);
actionComposer.use(onDelete);
actionComposer.use(onMessage);
// Boshqa composerlarni ham shu yerda qo'shing

module.exports = actionComposer;
