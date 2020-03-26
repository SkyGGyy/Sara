module.exports.run = async (client, message, args) => {
    const utils = require('../../utils.json')
    const {voiceChannel} = message.member;
    if (!voiceChannel) return message.channel.send(`${utils.error} Necesitas estar en un canal de voz para ejecutar ese comando!`);
    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return message.channel.send(`${utils.error} No hay nada reproduciendose ahora mismo!`);
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end('Se acabo.');
}

module.exports.help = {
    name: 'stop'
}