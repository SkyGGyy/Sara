const Discord = require('discord.js');
const utils = require('../utils.json')

module.exports.run = async(client, message, args) => {
    
    if(!args[0]) return message.channel.send(`${utils.error} Que dire?`);

    const toSay = args.join(" ");
    
    message.channel.send(toSay);
}

module.exports.help = {
    name: 'say'
}