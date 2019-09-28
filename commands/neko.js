const Discord = require('discord.js');
const Discordmeme = require('discordmeme.js');
const utils = require('../utils.json');

module.exports.run = async(client, message, args) => {
    if(message.channel.nsfw === true){
        let image = await Discordmeme.neko();

        const embed = new Discord.RichEmbed()
        .setTitle("Aqui esta lo que pedias...")
        .setImage(image)
        .setColor("#EE82EE")
        .setFooter("Bot desarrollado por Pabszito#7790", "https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048");

        message.channel.send(embed);
    }else{
        message.channel.send(`${utils.error} Debes estar en un canal NSFW para utilizar ese comando!`)
    }
}

module.exports.help = {
    name: 'neko'
}