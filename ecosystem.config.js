module.exports = {
  apps: [
    {
      name: "SavedMessagesBot",
      script: "index.js",
      instances: 1,
      exec_mode: "fork",
      watch: false,
    },
  ],
};
