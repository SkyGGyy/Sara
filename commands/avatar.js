const Discord = require('discord.js');

module.exports.run = async(client, message, args) =>{
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.send('<:error:619698101447294977> Debes mencionar a alguien.').catch(console.error);

    const embed = new Discord.RichEmbed()
        .setTitle("Avatar")
        .setDescription("Aqui tienes el avatar de " + user + ".")
        .setImage(user.avatarURL);
    embed.setColor("#EE82EE");
    embed.setFooter("Bot desarrollado por Pabszito#7790", "https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048")
    message.channel.send({ embed });
}
module.exports.help = {
    name:"avatar"
}