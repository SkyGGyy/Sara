const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
var Weez = require('weez');
var weez = new Weez.WeezAPI(botconfig.weezkey);

module.exports.run = async(client, message, args) => {
    let toKiss=message.mentions.users.first();
    if(message.author===toKiss) return message.channel.sendMessage("<:error:619698101447294977> ooohh, eso es triste. Te besaras a ti mismo?");
    if(toKiss.id==='549379358914248724') return message.channel.sendMessage("<:error:619698101447294977> Conmigo no lo haras!");
    if(!toKiss) return message.channel.send("<:error:619698101447294977> Menciona a alguien.");

    let link = await weez.randomBeso();

    message.channel.send(toKiss+", recibiste un beso de <@"+message.author.id+">", {files: [link]});
}

module.exports.help = {
    name:"kiss"
}