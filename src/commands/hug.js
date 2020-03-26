const Discord = require('discord.js');
const botconfig = require('../storage/botconfig.json');
var Weez = require('weez');
var weez = new Weez.WeezAPI(botconfig.weezkey);

module.exports.run = async (client, message, args) => {
    let member = message.mentions.users.first();
    if (!member) return message.channel.send("<:error:619698101447294977> Intentas abrazar a un fantasma?");
    if (member.id === '549379358914248724') return message.channel.send("<:error:619698101447294977> Conmigo no.");
    if (member === message.author) return message.channel.send("<:error:619698101447294977> Te intentas abrazar a ti mismo? ok...");
    let img = await weez.randomAbrazo();
    message.channel.send(member + ", has recibido un abrazo de " + message.author, {files: [img]});
    
    // BRUH
}

module.exports.help = {
    name: "hug"
}
