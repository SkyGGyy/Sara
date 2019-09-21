const Discord = require('discord.js');
const config = require("../botconfig.json");
const token = config.token;

module.exports.run = async(client, message, args) => {
    if (message.author.id === "447902653842980875") {
        client.channels.get("619703165943545881").send("<:error:619698101447294977> Bot '[549379358914248724] Sara' has exited with code 0 (0x0).");
        message.channel.send("<:refresh:619698804471496735> El bot se esta reiniciando, por favor espere...").then(message => client.destroy()).then(() => client.login(token));
    }
}

module.exports.help = {
    name:"restart"
}