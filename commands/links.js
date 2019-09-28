const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setTitle("Links")
        .setDescription("Aqui encontraras algunos links relacionados al bot")
        .addField("GitHub", "El GitHub del bot es https://www.github.com/Pabszito/Sara/", false)
        .addField("DiscordBots", "El link de DiscordBots es https://discordbots.org/bot/549379358914248724", false)
        .addField("Invitacion del bot", "Puedes invitar al bot desde el siguiente enlace: https://discordapp.com/oauth2/authorize?client_id=549379358914248724&permissions=8&scope=bot")
        .setColor("#EE82EE")
        .setFooter("Bot desarrollado por Pabszito#7790", "https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048");
    message.channel.send(embed);
}

module.exports.help = {
    name: 'links'
}