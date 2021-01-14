# Telegram Chat History Importer
This app will import your conversations from WhatsApp or other services (using a _txt_ file obtained from the chat provider) into Telegram.

Currently it supports:
* Sender Name
* Message Timestamp
* Photo (jpg)
* Video (mp4)
* Static WebP Sticker

Briefly, Telegram Chat History Importer can turn your exported plaintext conversations into a 1:1 format from this:
![](/Tutorial/chatlog.png)

Into this:

![](/Tutorial/result.gif)

## How to use?
1. Export your WhatsApp conversation (with attachments as you wish)

![](/Tutorial/export-whatsapp-chat.jpg)

2. Get your Bot API Key from @botfather
3. Add your bot into a chat, and get your `chatId`
4. Extract the WhatsApp zip contents into the project folder
5. The bot will inject the history every 3 seconds (Bot rate limit for group)

p.s. Only tested with iPhone

## Credits
Inspired by https://github.com/TelegramTools/TLImporter
