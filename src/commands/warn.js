const Discord = require('discord.js');
const utils = require('../utils.json');

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("KICK_MEMBERS")) {
        let target = message.mentions.users.first();
        let reason = args.slice(1).join(' ');

        if (message.author === warn) return message.channel.send(`${utils.error} No te puedes advertir a ti mismo!`);
        if (!target) return message.channel.send(`${utils.error} Menciona a alguien.`);
        if (!reason) return message.channel.send(`${utils.error} Por favor, especifica una razon.`);
        if (!message.guild.member(target).kickable) return message.channel.send(`${utils.error} No puedo advertir al usuario mencionado.`);

        warn.send("**Fuiste advertido!**\n" +
            `Staff: ${message.author}\n` +
            `Razon: ${razon} \n` +
            `Servidor: ${message.guild.name}`).catch(console.error);

        console.log(message.author.username + " advirtio a " + warn.username);
        let embed = new Discord.RichEmbed()
            .setTitle("Usuario advertido")
            .setDescription('Un usuario ha sido advertido!')
            .addField("Staff:", message.author.tag, false)
            .addField("Usuario:", target.user.tag, false)
            .addField("Razon:", razon, false);
        embed.setColor("#EE82EE");
        embed.setFooter('Bot desarrollado por Pabszito#7777', client.user.avatarURL);
        message.channel.send(embed);
    } else {
        message.send("<:error:619698101447294977> Permisos insuficientes.");
    }
}

module.exports.help = {
    name: "warn"
}
