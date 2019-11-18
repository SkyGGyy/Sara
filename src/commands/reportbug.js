const Discord = require('discord.js');
const utils = require('../utils.json');
const storage = require('../storage/contactmessages.json');
var path = require('path');

module.exports.run = async(client, message, args) => {
    let oldreports = "";
    if (storage.hasOwnProperty(message.author.tag)) {
        oldreports = storage[message.author.tag];
    }
    let text = args.join(" ");
    storage[message.author.tag] = oldreports !== "" ? oldreports : "" +" | - | "+text;
    require('fs').writeFile(path.resolve(__dirname, '..') + "/storage/contactmessages.json", JSON.stringify(storage), (err) => {
        if (err) message.channel.send(`${utils.error} Oops! Ocurrio un error, por favor, intentalo mas tarde: ${err}`);
    });
    message.channel.send(`${utils.info} Tu reporte fue guardado con exito en nuestros logs. Espera a que un staff lo revise. Si quieres hacer mas rapido, unete al servidor de soporte.`)
}

module.exports.help = {
    name: 'reportbug'
}