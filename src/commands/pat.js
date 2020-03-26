const Discord = require('discord.js');
const botconfig = require('../storage/botconfig.json');
var Weez = require('weez');
var weez = new Weez.WeezAPI(botconfig.weezkey);

module.exports.run = async (client, message, args) => {
    let member = message.mentions.users.first();
    if (!member) return message.channel.sendMessage("<:error:619698101447294977> Intentas darle cariño a un fantasma?");
    if (member.id === '549379358914248724') return message.channel.sendMessage("<:error:619698101447294977> Conmigo no.");
    if (member === message.author) return message.channel.sendMessage("<:error:619698101447294977> Te intentas dar cariño a ti mismo?");
    let img = await weez.randomPat();
    //bruh
    message.channel.send(member + ", has recibido un poco de cariño por parte de " + message.author, {files: [img]});
}

module.exports.help = {
    name: "pat"
}
