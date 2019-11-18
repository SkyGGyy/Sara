module.exports.run = async (client, message, args) => {
    if (message.author.id === "447902653842980875") {
        message.channel.send("<:info:619693194862657566> Apagando el bot, por favor espere...").then(client.destroy());
    }
}

module.exports.help = {
    name: "exit"
}