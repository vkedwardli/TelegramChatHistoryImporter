# Telegram Chat History Importer
This app will import your conversations from WhatsApp or other services (using a _txt_ file obtained from the chat provider) into Telegram.

Currently it supports:
* Sender Name
* Message Timestamp
* Photo (jpg)
* Video (mp4)
* Audio messages (opus)
* Static WebP Stickers
* All other attachments (pdf, etc)

Briefly, Telegram Chat History Importer can turn your exported plaintext conversations into a 1:1 format from this:
![](https://github.com/vkedwardli/TelegramChatHistoryImporter/blob/a47f212e1afaf960085f252acf77a61185e822f6/Tutorial/chatlog.png)

Into this:

![](https://github.com/vkedwardli/TelegramChatHistoryImporter/blob/a47f212e1afaf960085f252acf77a61185e822f6/Tutorial/result.gif)

## How to use?
1. Export your WhatsApp conversation (with attachments as you wish)

![](https://github.com/vkedwardli/TelegramChatHistoryImporter/blob/a47f212e1afaf960085f252acf77a61185e822f6/Tutorial/export-whatsapp-chat.jpg)

2. Get your Bot API Key from @botfather
3. Add your bot into a chat, and get the target `chatId`
4. Extract the WhatsApp zip contents into the project folder
5. The bot will inject the history every 3 seconds (Bot rate limit for group)

p.s. Only tested with iPhone + WhatsApp, YMMV

## Credits
Inspired by https://github.com/TelegramTools/TLImporter
