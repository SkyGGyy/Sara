const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle("Ping")
    .setDescription("📡 El ping del bot es de `" +  Math.round(client.ping) + " ms` desde glitch.");
    embed.setColor("#EE82EE");
    embed.setFooter("Bot desarrollado por Pabszito#7790", "https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048");
    message.channel.send({ embed });
}

module.exports.help = {
    name:"ping"
}