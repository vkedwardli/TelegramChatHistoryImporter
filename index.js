
const TelegramBot = require('node-telegram-bot-api');
const token = 'INSERT_YOUR_BOT_API_TOKEN';

const bot = new TelegramBot(token, {polling: true});
var chatId = -1234567890123 //INSERT_YOUR_TARGET_CHAT_ID

const timer = ms => new Promise(res => setTimeout(res, ms))

var fs = require("fs");
fs.readFile("_chat.txt", "utf8", async function(err, data) {

    var elements = data.split('\n[')
    for(let i = 0; i < elements.length; i += 1) {
        var element = elements[i]

        var date = element.substring(0, element.indexOf(']'))
        var body = element.substring(element.indexOf(']')+1)

        if(body.indexOf(': ') != -1){
            var sender = element.substring(element.indexOf(']')+1, element.indexOf(': ')).replace(/u202A/g, '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
            // console.log(sender)

            var message = element.substring(element.indexOf(': ')+2)

            if(message.indexOf('<attached: ') != -1){
                var file = message.substring(message.indexOf(': ')+2, message.indexOf('>'))
                console.log(file)

                if(message.indexOf('STICKER') != -1){
                    //sticker
                    //DOES NOT SUPPORT animted WebP, use `webpmux -get frame 1 input.webp -o output.webp` to extract single frame first
                    await bot.sendSticker(chatId, file, {
                        reply_markup: JSON.stringify({
                          inline_keyboard: [[{ text: sender, callback_data:'1'}]]
                        })})

                }else if(message.indexOf('jpg') != -1){
                    //image
                    await bot.sendPhoto(chatId, file, {caption:`<b>${sender}</b> <pre>${date}</pre>`, parse_mode:'HTML'})

                }else if(message.indexOf('mp4') != -1){
                    //video
                    await bot.sendVideo(chatId, file, {caption:`<b>${sender}</b> <pre>${date}</pre>`, parse_mode:'HTML'})

                }else{
                    //file
                    await bot.sendDocument(chatId, file, {caption:`<b>${sender}</b> <pre>${date}</pre>`, parse_mode:'HTML'})
                }
            }else{
                console.log(message)
                await bot.sendMessage(chatId, `<b>${sender}</b> <pre>${date}</pre>\n${message.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}`, {parse_mode:'HTML'});
            }


        }else{
            
            console.log(body)
            await bot.sendMessage(chatId, `<pre>${date}</pre>\n${body.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}`, {parse_mode:'HTML'});
        }

        
        await timer(3000);
        
    }
});