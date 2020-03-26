const Discord = require('discord.js')
const memer = require('discordmeme.js');

module.exports.run = async (client, message, args) => {
    let img = await memer.meme();
    message.channel.send({files: [img]}).then(m => {
        m.react('😂')
    });
    //bruh reddit memes > discordmeme.js
}

module.exports.help = {
    name: "meme"
}
