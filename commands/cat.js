const Discord = require('discord.js');
const request = require('request');

module.exports.run = async(client, message, args) => {
    request('http://edgecats.net/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
                const embed = new Discord.RichEmbed()
                .setTitle("meow!")
                .setDescription("Ten un gatito.. OwO")
                .setImage(body);
                embed.setColor("#EE82EE");
                embed.setFooter("Bot desarrollado por Pabszito#7790", "https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048");
               message.channel.send(embed);  
        }
    });
}

module.exports.help = {
    name:"cat"
  }