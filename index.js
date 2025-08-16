require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');

// Environment variables
const token = process.env.BOT_TOKEN;
const channelId = process.env.CHANNEL_ID;
const webhookUrl = process.env.WEBHOOK_URL;
const port = process.env.PORT || 5000;

const bot = new TelegramBot(token, {webHook: true});
const app = express();
app.use(bodyParser.json());

// Set webhook
bot.setWebHook(`${webhookUrl}/bot${token}`);

// Simple in-memory session store
const sessions = {};

// Telegram webhook handler
app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Example: Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the Dragon Prediction Bot!');
});

// Example: Prediction command
bot.onText(/\/predict/, (msg) => {
  const chatId = msg.chat.id;
  // Your prediction logic here
  bot.sendMessage(chatId, 'Prediction feature coming soon!');
});

// Example: Forward to channel
bot.onText(/\/send (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  if (channelId) {
    bot.sendMessage(channelId, `User ${chatId} says: ${resp}`);
    bot.sendMessage(chatId, 'Message sent to channel.');
  } else {
    bot.sendMessage(chatId, 'Channel ID not set.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
