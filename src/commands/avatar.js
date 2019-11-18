const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.channel.send('<:error:619698101447294977> Debes mencionar a alguien.').catch(console.error);

    const embed = new Discord.RichEmbed()
        .setTitle("Avatar")
        .setDescription("Aqui tienes el avatar de " + user + ".")
        .setImage(user.avatarURL);
    embed.setColor("#EE82EE");
    embed.setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
    message.channel.send({embed});
}
module.exports.help = {
    name: "avatar"
}