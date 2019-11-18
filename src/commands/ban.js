const Discord = require('discord.js')
const utils = require('../utils.json');

module.exports.run = async (client, message, args) => {

    if (!message.guild.me.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${utils.error} No tengo permisos para banear usuarios.`)
    }

    if (!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send(`${utils.error} No tienes permisos para ejecutar ese comando.`)
    }

    if (!message.guild.member(user).kickable) return message.channel.send(`${utils.error} No puedo banear al usuario mencionado.`);

    let mem = message.mentions.members.first()
    if (!mem) {
        return message.channel.send(`${utils.error} Necesitas mencionar a alguien.`)
    } else if (mem.highestRole.comparePositionTo(message.member.highestRole) > 0) {
        return message.channel.send(`${utils.error} No puedo banear al usuario mencionado.`)
    }

    var razon = args.slice(1).join(' ')
    if (!razon) {
        razon = `${message.author.tag}: No se especifico una razon.`
    } else {
        razon = `${message.author.tag}: ${razon}`
    }

    mem.send("**Fuiste baneado!**\n" +
        `Staff: ${message.author}\n` +
        `Razon: ${razon} \n` +
        `Servidor: ${message.guild.name}`).catch(console.error);

    mem.ban(razon).catch(e => {
        message.channel.send(`${utils.error} No se pudo banear al usuario mencionado debido a un error desconocido, por favor, si tienes permisos, mira la consola.`)
        console.error(`[ERROR] Ocurrio un error mientras se baneaba a un usuario: ${e}`);
    });

    let embed = new Discord.RichEmbed()
        .setTitle("Usuario baneado")
        .setDescription(`El usuario ${mem.user.tag} fue baneado`)
        .addField("Detalles", `**Usuario afectado:** ${mem.user.tag}\n**Staff:** ${message.author.tag}\n**Razon**: ${razon}\n**Duracion:** Este baneo no expira.`, false)
        .setColor("#EE82EE")
        .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL);

    message.channel.send(embed)
}

module.exports.help = {
    name: 'ban'
}