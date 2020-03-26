const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let target = message.mentions.users.first();
    if (message.mentions.users.size < 1) target = message.author;

    let embed = new Discord.RichEmbed()
        .setTitle("Avatar")
        .setDescription(`${target === message.author ? "Aqui tienes tu avatar" : "Aqui esta el avatar de ${message.author.tag}.`)
        .setImage(user.avatarURL);
        .setColor("#EE82EE")
        .setFooter("Bot desarrollado por Pabszito#7777", client.user.avatarURL)
    message.channel.send({embed});
}
module.exports.help = {
    name: "avatar"
}
