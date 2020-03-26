const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const {voiceChannel} = message.member;
    if (!voiceChannel) return message.channel.send(`${utils.error} Necesitas estar en un chat de voz para utilizar este comando!`);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send(`${utils.warning} No hay ninguna otra cancion en la cola!`);
    serverQueue.connection.dispatcher.end('Salteando cancion...');
}

module.exports.help = {
    name: 'skip'
}