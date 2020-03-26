const Discord = require('discord.js');
const botconfig = require('../storage/botconfig.json');
const Weez = require('weez');
const weez = new Weez.WeezAPI(botconfig.weezkey);
const utils = require('../utils.json');

module.exports.run = async (client, message, args) => {
    let target = message.mentions.users.first();
    if (message.mentions.users.size < 1) target = message.author;

    let trash = await weez.basura(target.avatarURL);

    let attachment = new Discord.Attachment(trash, 'basura.png');
    let embed = new Discord.RichEmbed()
        .setTitle("...")
        .setDescription(`${target === message.author ? "Te consideras basura?" : "confirmo, esto es basura"}`)
        .attachFile(attachment)
        .setImage('attachment://basura.png')
        .setColor("#EE82EE")
        .setFooter("Bot desarrollado por Pabszito#7777", client.user.avatarURL)
        .setImage(attachment);
    
    message.channel.send(embed);
}

module.exports.help = {
    name: 'basura'
}
