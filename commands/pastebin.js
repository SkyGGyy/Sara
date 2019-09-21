const Discord = require('discord.js');
const PastebinAPI = require('pastebin-js');
const botConfig = require('../botconfig.json');
var pastebin = new PastebinAPI(botConfig.pastebinapikey);
pastebin = new PastebinAPI({
    'api_dev_key' : botConfig.pastebinapikey,
    'api_user_name' : botConfig.pastebinusername,
    'api_user_password' : botConfig.pastebinuserpassword
})

module.exports.run = async(client, message, args) => {
    let paste = args.slice(0).join(" ")
    let type = args.slice(1).join(" ")
    if (!args[0]) { return message.channel.send("<:error:619698101447294977> No puedo subir aire a Pastebin.") }
    pastebin
        .createPaste(paste, "Post de "+message.author.tag)
        .then(function (data) {
            const embed = new Discord.RichEmbed()
            .setTitle("Pastebin")
            .setDescription("Tu post fue creado con exito! Puedes verlo en "+data+" cuando tu quieras.\n Raw: https://pastebin.com/raw/"+data.substring(21));
            embed.setColor("#EE82EE");
            embed.setFooter("Bot desarrollado por Pabszito#7790", "https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048");
            message.channel.send(embed);
    })
    .fail(function (err) {
        // Something went wrong
        console.log(err).then(message.channel.send("<:error:619698101447294977> No se pudo subir lo que especificaste. Puede que https://pastebin.com no se encuentre disponible. Puedes comprobarlo por ti mismo o intentar de nuevo mas tarde."));
    })
}

module.exports.help = {
    name: "pastebin"
}
