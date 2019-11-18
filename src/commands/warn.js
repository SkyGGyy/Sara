const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (message.member.hasPermission("KICK_MEMBERS")) {
        let warn = message.mentions.users.first();
        let razon = args.slice(1).join(' ');

        if (message.author === warn) return message.channel.send("<:error:619698101447294977> No te puedes advertir a ti mismo!");
        if (!warn) return message.channel.send("<:error:619698101447294977> Menciona a alguien.");
        if (!razon) return message.channel.send("<:error:619698101447294977> Por favor, especifica una razon.");
        if (!message.guild.member(warn).kickable) return message.channel.send('<:error:619698101447294977> No puedo advertir al usuario mencionado.');

        warn.send("**Fuiste advertido!**\n" +
            `Staff: ${message.author}\n` +
            `Razon: ${razon} \n` +
            `Servidor: ${message.guild.name}`).catch(console.error);

        console.log(message.author.username + " advirtio a " + warn.username);
        const embed = new Discord.RichEmbed()
            .setTitle("Usuario advertido")
            .setDescription('Un usuario ha sido advertido!')
            .addField("Staff:", message.author, false)
            .addField("Usuario:", warn, false)
            .addField("Razon:", razon, false);
        embed.setColor("#EE82EE");
        embed.setFooter('Bot desarrollado por Pabszito#7790', client.user.avatarURL);
        message.channel.send({embed});
    } else {
        message.send("<:error:619698101447294977> Permisos insuficientes.");
    }
}

module.exports.help = {
    name: "warn"
}