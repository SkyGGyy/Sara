const Discord = require('discord.js');
const superagent = require('superagent');
const utils = require('../utils.json');

module.exports.run = (client, message, args) => {
    if (message.channel.nsfw === true) {
        superagent.get('https://nekobot.xyz/api/image')
        .query({ type: 'hentai_anal'})
        .end((err, response) => {
            const embed = new Discord.RichEmbed()
            .setTitle("Aqui esta lo que pedias...")
            .setImage(response.body.message)
            .setColor("#EE82EE")
            .setFooter("Bot desarrollado por Pabszito#7790", "https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048");
        message.channel.send(embed)
            //message.channel.send({ file: response.body.message });
      });
    }else{
        message.channel.send(`${utils.error} Debes estar en un canal NSFW para utilizar ese comando!`)
    }
}

module.exports.help = {
    name: 'hentai'
}