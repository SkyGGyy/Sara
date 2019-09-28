const Discord = require('discord.js');
const hastebin = require('hastebin-gen');

module.exports.run = (client, message, args) => {
    let haste = args.slice(0).join(" ")
       let type = args.slice(1).join(" ")
       if (!args[0]) { return message.channel.send("<:error:619698101447294977> No puedo subir aire a Hastebin.") }
       hastebin(haste).then(r => {
           const embed = new Discord.RichEmbed()
           .setTitle("Hastebin")
           .setDescription("Tu post fue creado con exito! Puedes verlo en "+r+" cuando tu quieras.");
           embed.setColor("#EE82EE");
           embed.setFooter("Bot desarrollado por Pabszito#7790", "https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048");
           message.channel.send(embed);
       }).catch(console.error).then(message.channel.send("<:error:619698101447294977> No se pudo subir lo que especificaste. Puede que https://hastebin.com no se encuentre disponible. Puedes comprobarlo por ti mismo o intentar de nuevo mas tarde."));
}        

module.exports.help = {
    name: "hastebin"
}