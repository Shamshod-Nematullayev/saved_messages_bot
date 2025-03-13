# Saved Messages Bot

Saved Messages Bot is a Telegram bot that stores all messages (text, images, videos, files, music, voice messages) sent by users and allows them to retrieve them later using buttons.

## 📌 Features

- 🖼 **Save and retrieve images**
- 🎞 **Save and retrieve videos**
- 💬 **Save and retrieve text messages**
- 📄 **Save and retrieve files**
- 🎧 **Save and retrieve music**
- 🎤 **Save and retrieve voice messages**
- 📂 **Retrieve all saved messages using buttons**

## 🚀 Installation

### 1. Clone the repository

```sh
git clone https://github.com/yourusername/savedMessagesBot.git
cd savedMessagesBot
```

### 2. Install required packages

```sh
npm install
```

### 3. Create and configure `.env` file

Create a `.env` file and add the following details:

```
BOT_TOKEN=your_telegram_bot_token
CHANNEL_ID=your_telegram_channel_id
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the bot

```sh
npm start
```

## 📖 Usage

1. **Send a message to the bot** – image, video, text, file, music, or voice message.
2. **The bot saves it**, allowing you to retrieve it later.
3. **Use the `/help` command** – to get information on how to use the bot.
4. **Use the `/info` command** – to view saved messages.
5. **Retrieve messages via buttons**.

## 📜 Commands

| Command  | Description                     |
| -------- | ------------------------------- |
| `/start` | Start the bot                   |
| `/help`  | Get usage instructions          |
| `/info`  | View the list of saved messages |

## 🛠 Technologies

- [Node.js](https://nodejs.org/)
- [Telegraf.js](https://telegraf.js.org/)
- [MongoDB](https://www.mongodb.com/)

## 🤝 Contributing

1. **Fork** the repository.
2. **Create a new branch**: `git checkout -b my-new-feature`
3. **Commit your changes**: `git commit -m 'Add some feature'`
4. **Push to the branch**: `git push origin my-new-feature`
5. **Submit a pull request**.

## 📩 Contact

If you have any questions or issues, feel free to reach out via discussions or the Issues section.

---
[**DEMO**](https://t.me/saved_messeges_bot)
---
**Author:** [Shamshod Ne'matullayev](https://github.com/Shamshod-Nematullayev)
