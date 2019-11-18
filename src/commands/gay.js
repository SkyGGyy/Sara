const Discord = require('discord.js');
const botconfig = require('../storage/botconfig.json');
var Weez = require('weez');
var weez = new Weez.WeezAPI(botconfig.weezkey);
const utils = require('../utils.json');

module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.send('<:error:619698101447294977> Debes mencionar a alguien.').catch(console.error);

    let gay = await weez.rainbow(user.avatarURL);

    const attachment = new Discord.Attachment(gay, 'gay.png');
    message.channel.send(attachment);
}

module.exports.help = {
    name: 'gay'
}