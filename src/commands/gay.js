const Discord = require('discord.js');
const botconfig = require('../storage/botconfig.json');
var Weez = require('weez');
var weez = new Weez.WeezAPI(botconfig.weezkey);
const utils = require('../utils.json');

module.exports.run = async (client, message, args) => {
    let target = message.mentions.users.first();
    if (message.mentions.users.size < 1) target = message.author;

    let gay = await weez.rainbow(target.avatarURL);

    let attachment = new Discord.Attachment(gay, 'gay.png');
    let embed = new Discord.RichEmbed()
        .setTitle("...")
        .setDescription(`${target != message.author ? null : "Una vez me sente en un platano, y por supuesto eso cambio mi vida"}`)
        .setColor("#EE82EE")
        .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
        .setImage(attachment);
    
    message.channel.send(embed);
}

module.exports.help = {
    name: 'gay'
}
