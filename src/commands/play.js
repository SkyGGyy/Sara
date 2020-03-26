const Discord = require('discord.js');
const {Client, Util} = require('discord.js');
const ytdl = require('ytdl-core');
const utils = require('../utils.json')
const ytdlDiscord = require('ytdl-core-discord');

module.exports.run = async (client, message, args) => {

    if (!args[0]) return message.channel.send(`${utils.error} Necesitas especificar una cancion!`)
    let {voiceChannel} = message.member;
    if (!voiceChannel) return message.channel.send(`${utils.error} Necesitas estar en un canal de voz para usar este comando!`);
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has('CONNECT')) return message.channel.send(`${utils.error} No puedo conectarme a ese canal de voz, asegurate de que tengo permisos!`);
    if (!permissions.has('SPEAK')) return message.channel.send(`${utils.error} No puedo hablar en este canal de voz, asegurate de que tengo permisos!`);

    let serverQueue = message.client.queue.get(message.guild.id);
    let songInfo = await ytdl.getInfo(args[0]);
    let song = {
        id: songInfo.video_id,
        title: Util.escapeMarkdown(songInfo.title),
        url: songInfo.video_url
    };

    if (serverQueue) {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        return message.channel.send(`${utils.info} Se añadio ${song.title} a la cola!`);
    }

    let queueConstruct = {
        textChannel: message.channel,
        voiceChannel,
        connection: null,
        songs: [],
        volume: 2,
        playing: true
    };

    message.client.queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);

    let play = async song => {
        let queue = message.client.queue.get(message.guild.id);

        if (!song) {
            queue.voiceChannel.leave();
            message.client.queue.delete(message.guild.id);
            return;
        }

        let dispatcher = queue.connection.playOpusStream(await ytdlDiscord(song.url), {passes: 3})
            .on('end', reason => {
                    if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
                    else console.log(reason);
                    queue.songs.shift();
                    play(queue.songs[0]);
                }
            )
            .on('error', error => console.error(error));

        dispatcher.setVolumeLogarithmic(queue.volume / 5);
        let embed = new Discord.RichEmbed()
            .setTitle(`Reproductor`)
            .setDescription(`Comenzando a reproducir **${song.title}**!`)
            .setColor("#ee82ee")
            .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL);
        queue.textChannel.send(embed);
    };

    try {
        let connection = await voiceChannel.join();
        queueConstruct.connection = connection;
        play(queueConstruct.songs[0]);
    } catch (error) {
        console.error(`No me pude conectar a un canal de voz: ${error}`);
        client.queue.delete(message.guild.id);
        await voiceChannel.leave();
        return message.channel.send(`${utils.error} No me pude conectar al canal de voz: ${error}`);
    }
}

module.exports.help = {
    name: 'play'
}