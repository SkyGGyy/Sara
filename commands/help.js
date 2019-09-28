const Discord = require('discord.js');

module.exports.run = async(client, message, args) => { 
    const embed = new Discord.RichEmbed()
    .setTitle("Menu de ayuda")
    .setDescription("Necesitas ayuda? Reacciona a uno de los emojis para obtener ayuda sobre una categoria en especifico!\n"+
    "⛔ : Comandos de moderacion\n"+
    "🍿 : Comandos de entretenimiento\n"+
    "ℹ : Comandos de informacion\n"+
    "🛠 : Comandos dedicados a los desarrolladores\n"+
    "🎵 : Comandos de musica\n"+
    "🔞 : Comandos NSFW (18+)\n"+
    "🛰 : Utilidades o otros")
    .setColor("#EE82EE")
    .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL);

    message.channel.send({embed}).then(async (msg) => {
        await msg.react("⛔")
        await msg.react("🍿")
        await msg.react("ℹ")
        await msg.react("🛠")
        await msg.react("🎵")
        await msg.react("🔞")
        await msg.react("🛰")

        const moderationFilter = (reaction, user) => reaction.emoji.name === '⛔' && user.id === message.author.id;
        const entertainmentFilter = (reaction, user) => reaction.emoji.name === '🍿' && user.id === message.author.id;
        const informationFilter = (reaction, user) => reaction.emoji.name === 'ℹ' && user.id === message.author.id;
        const devFilter = (reaction, user) => reaction.emoji.name === '🛠' && user.id === message.author.id;
        const musicFilter = (reaction, user) => reaction.emoji.name === '🎵' && user.id === message.author.id;
        const nsfwFilter = (reaction, user) => reaction.emoji.name === '🔞' && user.id === message.author.id;
        const utilFilter = (reaction, user) => reaction.emoji.name === '🛰' && user.id === message.author.id;
            
        const moderation = msg.createReactionCollector(moderationFilter, { time: 60000 });
        const entertainment = msg.createReactionCollector(entertainmentFilter, { time: 60000 });
        const info = msg.createReactionCollector(informationFilter, { time: 60000 });
        const dev = msg.createReactionCollector(devFilter, { time: 60000 });
        const music = msg.createReactionCollector(musicFilter, { time: 60000 });
        const nsfw = msg.createReactionCollector(nsfwFilter, { time: 60000 });
        const util = msg.createReactionCollector(utilFilter, { time: 60000 });

        moderation.on('collect', r => {
            msg.delete();
            const embed=new Discord.RichEmbed()
            .setTitle("⛔ Comandos de moderacion")
            .setDescription('s!warn <miembro> <razon>: Advierte a un usuario.\n' +
            's!kick <miembro> <razon>: Expulsa a un usuario.')
            .setColor("#EE82EE")
            .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
            message.channel.send({embed})
        })

        entertainment.on('collect', r => {
            msg.delete();
            const embed=new Discord.RichEmbed()
            .setTitle("🍿 Comandos de entretenimiento")
            .setDescription('s!hug <miembro>: Abraza a un usuario\n' +
                's!pat <miembro>: Dale un poco de cariño a alguien.\n' +
                's!kiss <miembro>: Dale un beso a alguien.\n' +
                's!meme: Envia un meme aleatorio.\n'+
                's!8ball <pregunta>: 8ball clasico.\ns!triggered <miembro>: ***triggered***\ns!gay <miembro>: Una vez cuando tenia 7 años me senté en un plátano, y claro eso cambio mi vida. <3\ns!basura <miembro>: Wow, esto es basura!')
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
                message.channel.send({embed})
            })

            info.on('collect', r => {
                msg.delete();
                const embed=new Discord.RichEmbed()
                .setTitle("ℹ Comandos de informacion")
                .setDescription('s!about: Obten informacion acerca del bot.\n' +
                's!serverinfo: Obten informacion acerca del servidor.\n' +
                's!ping: Obten el ping del bot.\n' +
                's!userinfo [miembro]: Obtener informacion de un usuario.\n'+
                's!links: Links relacionados al bot.')
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
                message.channel.send({embed})
            })
            
            dev.on('collect', r => {
                msg.delete();
                const embed = new Discord.RichEmbed()
                .setTitle("🛠 Comandos para desarrolladores")
                .setDescription('s!hastebin <texto>: Sube un codigo a hastebin.\n'+
                's!pastebin <texto>: Alternativa para cuando hastebin no esta disponible. Puedes subir codigos o otras cosas.')
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
                message.channel.send({embed})
            })

            music.on('collect', r => {
                msg.delete();
                const embed = new Discord.RichEmbed()
                .setTitle("🎵 Comandos de musica")
                .setDescription("s!play <cancion>: Reproduce una cancion\n"+
                "s!skip: Salta a la siguiente cancion en la cola.\n"+
                "s!stop: Frena el reproductor.\n"+
                "s!nowplaying: Que esta sonando ahora mismo?\n"+
                "**Nota:** Los comandos de Musica son *experimentales*, por lo que pueden contener errores ya sea al momento de ejecutarlos o en el momento que se reproduce una cancion.")
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
                message.channel.send({embed})
            })

            nsfw.on('collect', r => {
                msg.delete();
                const embed = new Discord.RichEmbed()
                .setTitle("🔞 Comandos NSFW")
                .setDescription("s!neko: Imagen neko aleatoria.\ns!hentai: Imagen Hentai aleatoria.")
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
                message.channel.send({embed})
            })

            util.on('collect', r => {
                msg.delete();
                const embed = new Discord.RichEmbed()
                .setTitle("🛰 Utilidades")
                .setDescription("s!qrcodegen <texto>: Genera un codigo QR a partir de un texto.")
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
                message.channel.send({embed})
            })
        })
}

module.exports.help = {
    name: 'help'
}