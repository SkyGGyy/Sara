const Discord = require('discord.js');
const prefixes = require('../storage/prefix.json');


module.exports.run = async (client, message, args) => {

    let prefix = "s!";

    if (prefixes.hasOwnProperty("g" + message.guild.id)) {
        prefix = prefixes["g" + message.guild.id];
    }

    let embed = new Discord.RichEmbed()
        .setTitle("Menu de ayuda")
        .setDescription("Necesitas ayuda? Reacciona a uno de los emojis para obtener ayuda sobre una categoria en especifico!\n" +
            "⛔ : Comandos de moderacion\n" +
            "🍿 : Comandos de entretenimiento\n" +
            "ℹ : Comandos de informacion\n" +
            "🛠 : Comandos dedicados a los desarrolladores y configuraciones\n" +
            "🎵 : Comandos de musica\n" +
            "🔞 : Comandos NSFW (18+)\n" +
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

        const moderation = msg.createReactionCollector(moderationFilter, {time: 60000});
        const entertainment = msg.createReactionCollector(entertainmentFilter, {time: 60000});
        const info = msg.createReactionCollector(informationFilter, {time: 60000});
        const dev = msg.createReactionCollector(devFilter, {time: 60000});
        const music = msg.createReactionCollector(musicFilter, {time: 60000});
        const nsfw = msg.createReactionCollector(nsfwFilter, {time: 60000});
        const util = msg.createReactionCollector(utilFilter, {time: 60000});

        moderation.on('collect', r => {
            msg.delete();
            const embed = new Discord.RichEmbed()
                .setTitle("⛔ Comandos de moderacion")
                .setDescription(`${prefix}warn <miembro> <razon>: Advierte a un usuario.\n` +
                    `${prefix}kick <miembro> <razon>: Expulsa a un usuario.\n
                    ${prefix}ban <miembro> <razon>: Banea a un usuario.\n
                    ${prefix}clear <cantidad entre 1 y 100>: Limpia una cierta cantidad de mensajes.`)
                .setColor("#EE82EE")
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
            message.channel.send({embed})
        })

        entertainment.on('collect', r => {
            msg.delete();
            const embed = new Discord.RichEmbed()
                .setTitle("🍿 Comandos de entretenimiento")
                .setDescription(`${prefix}!hug <miembro>: Abraza a un usuario\n` +
                    `${prefix}pat <miembro>: Dale un poco de cariño a alguien.\n` +
                    `${prefix}kiss <miembro>: Dale un beso a alguien.\n` +
                    `${prefix}meme: Envia un meme aleatorio.\n` +
                    `${prefix}8ball <pregunta>: 8ball clasico.\n${prefix}triggered <miembro>: ***triggered***\n${prefix}gay <miembro>: Una vez cuando tenia 7 años me senté en un plátano, y claro eso cambio mi vida. <3\n${prefix}!basura <miembro>: Wow, esto es basura!\n${prefix}cat: Imagen de un gato aleatorio.`)
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
            message.channel.send({embed})
        })

        info.on('collect', r => {
            msg.delete();
            const embed = new Discord.RichEmbed()
                .setTitle("ℹ Comandos de informacion")
                .setDescription(prefix + 'about: Obten informacion acerca del bot.\n' +
                    prefix + 'serverinfo: Obten informacion acerca del servidor.\n' +
                    prefix + 'ping: Obten el ping del bot.\n' +
                    prefix + 'userinfo [miembro]: Obtener informacion de un usuario.\n' +
                    prefix + 'links: Links relacionados al bot.')
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
            message.channel.send({embed})
        })

        dev.on('collect', r => {
            msg.delete();
            const embed = new Discord.RichEmbed()
                .setTitle("🛠 Comandos para desarrolladores")
                .setDescription(prefix + 'hastebin <texto>: Sube un codigo a hastebin.\n' +
                    prefix + 'pastebin <texto>: Alternativa para cuando hastebin no esta disponible. Puedes subir codigos o otras cosas.\n' + prefix + `prefix [prefix]: Establece o muestra el prefix actual.`)
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
            message.channel.send({embed})
        })

        music.on('collect', r => {
            msg.delete();
            const embed = new Discord.RichEmbed()
                .setTitle("🎵 Comandos de musica")
                //.setDescription("s!play <cancion>: Reproduce una cancion\n"+
                //"s!skip: Salta a la siguiente cancion en la cola.\n"+
                //"s!stop: Frena el reproductor.\n"+
                //"s!np: Que esta sonando ahora mismo?\n"+
                //"**Nota:** Los comandos de Musica son *experimentales*, por lo que pueden contener errores ya sea al momento de ejecutarlos o en el momento que se reproduce una cancion.")
                .setDescription("Lamentamos las molestias, pero estos comandos estan deshabilitados temporalmente.")
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
            message.channel.send({embed})
        })

        nsfw.on('collect', r => {
            msg.delete();
            if (message.channel.nsfw === true) {
                const embed = new Discord.RichEmbed()
                    .setTitle("🔞 Comandos NSFW")
                    .setDescription(prefix + "neko: Imagen neko aleatoria.\n" + prefix + "hentai: Imagen Hentai aleatoria.\n"+
                    `${prefix}hpussy: Imagen Hentai aleatoria (pussy)\n
                    ${prefix}boobs: Imagen de tetas aleatoria\n
                    ${prefix}ass: Imagen de culo aleatorio\n
                    ${prefix}4k: Imagen 4k aleatoria\n
                    ${prefix}anal: Imagen anal aleatoria\n
                    ${prefix}thigh: Imagen thigh aleatoria\n
                    ${prefix}yuri: Imagen yuri aleatoria`)
                    .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                    .setColor("#EE82EE")
                message.channel.send(embed)
            } else {
                const embed = new Discord.RichEmbed()
                    .setTitle("🔞 Comandos NSFW")
                    .setDescription("Este menu de ayuda solo es visible en los canales NSFW (Not safe/situable for work).")
                    .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                    .setColor("#EE82EE")
                message.channel.send(embed)
            }
        })

        util.on('collect', r => {
            msg.delete();
            let embed = new Discord.RichEmbed()
                .setTitle("🛰 Utilidades")
                .setDescription(prefix + "qrcodegen <texto>: Genera un codigo QR a partir de un texto.\n" + prefix + "morse <texto>: Convertidor de texto a codigo morse.\n"+`${prefix}prefix [prefix]: Establece el prefix (o muestra) para el servidor actual.\n${prefix}say <mensaje>: Hace que Sara envie un mensaje.\n${prefix}teamtrees: Estadisticas de [#teamtrees](https://teamtrees.org)\n${prefix}weather <ciudad>: Muestra la temperatura actual de un lugar.\n${prefix}reportbug <bug>: Reporta un bug. Tambien puedes hacerlo mediante el servidor de soporte.`)
                .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)
                .setColor("#EE82EE")
            message.channel.send(embed)
        })
    })
}

module.exports.help = {
    name: 'help'
}