const Discord = require('discord.js')
const utils = require('../utils.json')

module.exports.run = async(client, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        message.channel.send(`${utils.error} No tienes permisos para ejecutar ese comando.`);
        return;
    }else if(!message.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")){
        message.channel.send(`${utils.error} Necesito el permiso `+"`MANAGE_MESSAGES`"+` para ejecutar ese comando!`);
        return;
    }

    if(!args[0]) return message.channel.send(`${utils.error} Necesitas especificar un numero de mensajes a eliminar!`);

    let messagecount = parseInt(args[0]);

    if(messagecount > 101 || messagecount <= 0){
        message.channel.send(`${utils.error} Necesitas especificar un numero de mensajes a eliminar el cual este entre 1 y 100!`);
        return;
    }

    message.channel.fetchMessages({ limit: messagecount })
    message.delete().then(() => message.channel.bulkDelete(messagecount)).then((messages) => {
    message.channel.send(`Se eliminaron ${messages.size} mensaje(s)`).then(m => m.delete(2000))
    })
}

module.exports.help = {
    name: 'clear'
}
