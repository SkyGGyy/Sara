const Discord = require('discord.js');
const config = require("../storage/botconfig.json");
const token = config.token;

module.exports.run = async (client, message, args) => {
    if (message.author.id === "447902653842980875") {
        message.channel.send("<:refresh:619698804471496735> El bot se esta reiniciando, por favor espere...").then(message => client.destroy()).then(() => client.login(token));
    }
}

module.exports.help = {
    name: "restart"
}