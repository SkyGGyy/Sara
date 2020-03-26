const Discord = require('discord.js');
const request = require('request');

module.exports.run = async (client, message, args) => {
    request('http://edgecats.net/random', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let embed = new Discord.RichEmbed()
                .setTitle("meow!")
                .setImage(body);
            embed.setColor("#EE82EE");
            embed.setFooter("Bot desarrollado por Pabszito#7777", client.user.avatarURL);
            message.channel.send(embed);
        }
    });
}

module.exports.help = {
    name: "cat"
}
