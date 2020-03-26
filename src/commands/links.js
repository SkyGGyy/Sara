const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Links")
        .addField("GitHub", "[Click aqui](https://www.github.com/Pabszito/Sara/)", false)
        .addField("DiscordBots", "[Click aqui](https://discordbots.org/bot/549379358914248724)", false)
        .addField("Invitacion del bot", "[Click aqui](https://discordapp.com/oauth2/authorize?client_id=549379358914248724&permissions=8&scope=bot)")
        .setColor("#EE82EE")
        .setFooter("Bot desarrollado por Pabszito#7777", client.user.avatarURL);
    message.channel.send(embed);
}

module.exports.help = {
    name: 'links'
}
