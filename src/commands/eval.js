const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

    if (message.author.id === '447902653842980875') {
        const command = message.content.split(' ').slice(1).join(' ');
        message.channel.send(`${eval(command)}`);
    }
}

module.exports.help = {
    name: 'eval'
}