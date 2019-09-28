const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    if (message.author.id === "447902653842980875") {
        client.channels.get("619703165943545881").send("<:error:619698101447294977> Bot '[549379358914248724] Sara' has exited with code 0 (0x0).");
        message.channel.send("<:info:619693194862657566> Apagando el bot, por favor espere...").then(message => client.destroy());
    }
}

module.exports.help = {
    name:"exit"
}