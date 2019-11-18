const Discord = require('discord.js')
const morse = require('morse-node').create('ITU');
const utils = require('../utils.json')

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send(`${utils.error} Necesitas especificar un texto!`);
    let texto = args.slice(0).join(' ');
    const translated = morse.encode(texto);
    let embed = new Discord.RichEmbed()
        .setTitle('Traductor morse')
        .setDescription('Tu texto fue traducido! Estos son los resultados:\n**Texto original:** ' + texto + "\n**Traducido a morse:** " + translated)
        .setColor("#EE82EE")
        .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL);
    message.channel.send(embed);
}

module.exports.help = {
    name: 'morse'
}