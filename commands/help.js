const Discord = require('discord.js');

module.exports.run = async(client, message, args) => { 
    const embed=new Discord.RichEmbed()
    .setTitle("Ayuda")
    .setDescription("Aqui encontraras todos los comandos con su respectiva funcion.")
    .addField("⛔ Comandos de moderacion",
        's!warn <miembro> <razon>: Advierte a un usuario.\n' +
        's!kick <miembro> <razon>: Expulsa a un usuario.', false)
    .addField('🍿 Comandos de entretenimiento',
        's!hug <miembro>: Abraza a un usuario\n' +
        's!pat <miembro>: Dale un poco de cariño a alguien.\n' +
        's!kiss <miembro>: Dale un beso a alguien.\n' +
        's!meme: Envia un meme aleatorio.\n'+
        's!8ball <pregunta>: 8ball clasico.', false)
    .addField('📷 Comandos multimedia', 's!avatar <miembro>: Obten el avatar de un miembro.\n' +
        's!cat: Envia una imagen de un gato aleatorio.', false)
    .addField('ℹ Comandos de informacion',
        's!about: Obten informacion acerca del bot.\n' +
        's!serverinfo: Obten informacion acerca del servidor.\n' +
        's!ping: Obten el ping del bot.\n' +
        's!userinfo [miembro]: Obtener informacion de un usuario.\n'+
        's!links: Links relacionados al bot.', false)
    .addField('🛠 Comandos para desarrolladores', 's!hastebin <texto>: Sube un codigo a hastebin.\n'+
        's!pastebin <texto>: Alternativa para cuando hastebin no esta disponible. Puedes subir codigos o otras cosas.', false)
    .addField("🎵 Comandos de musica ", "s!play <cancion>: Reproduce una cancion\n"+
        "s!skip: Salta a la siguiente cancion en la cola.\n"+
        "s!stop: Frena el reproductor.\n"+
        "s!nowplaying: Que esta sonando ahora mismo?\n"+
        "**Nota:** Los comandos de Musica son *experimentales*, por lo que pueden contener errores ya sea al momento de ejecutarlos o en el momento que se reproduce una cancion.", false)
    .setColor("#EE82EE")
    .setFooter('Bot desarrollado por Pabszito#7790', 'https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048');
    message.channel.send({embed});
    //message.channel.send("Lamentamos las molestias, pero este comando fue deshabilitado temporalmente.");
}

module.exports.help = {
    name:"help"
}