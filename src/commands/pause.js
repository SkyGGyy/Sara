module.exports.run = async (client, message, args) => {
    const utils = require('../../utils.json')
    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
        serverQueue.playing = false;
        serverQueue.connection.dispatcher.pause();
        return message.channel.send(`${utils.info} Se pauso la cancion actual.`);
    }
    return message.channel.send(`${utils.error} No hay nada reproduciendose ahora mismo.`);
}

module.exports.help = {
    name: 'pause'
}