const Discord = require('discord.js')
const memer = require('discordmeme.js');
const utils = require('../utils.json');

module.exports.run = async(client, message, args) => {
    if(!args[0]) return message.channel.send(`${utils.error} Debes especificar un texto.`)
    
    let text = args.slice(0).join(" ")

    let qrcode = await memer.qrcodegen(text);

    const attachment = new Discord.Attachment(qrcode, 'qrcode.png');
    message.channel.send(attachment);
}

module.exports.help = {
    name: 'qrcodegen'
}