const Discord = require('discord.js');

let region = {
    "brazil": ":flag_br: Brazil",
    "eu-central": ":flag_eu: Central Europe",
    "singapore": ":flag_sg: Singapore",
    "us-central": ":flag_us: U.S. Central",
    "sydney": ":flag_au: Sydney",
    "us-east": ":flag_us: U.S. East",
    "us-south": ":flag_us: U.S. South",
    "us-west": ":flag_us: U.S. West",
    "eu-west": ":flag_eu: Western Europe",
    "vip-us-east": ":flag_us: VIP U.S. East",
    "london": ":flag_gb: London",
    "amsterdam": ":flag_nl: Amsterdam",
    "hongkong": ":flag_hk: Hong Kong",
    "russia": ":flag_ru: Russia",
    "southafrica": ":flag_za:  South Africa"
};

let verifLevels = ["Ninguno", "Bajo", "Intermedio", "Alto", "Muy alto"];

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " un dia" : " dias") + " atras";
};

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle("Informacion de servidor")
        .setDescription("Delivery! Aqui esta la informacion que pedias.")
        .addField("Nombre:", message.guild.name, true)
        .addField("Creado por:", `${message.guild.owner}`, true)
        .addField("Region del servidor:", region[message.guild.region], true)
        .addField("Miembros:", `${message.guild.members.filter(member => !member.user.bot).size}`, true)
        .addField("Bots:", `${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Total (miembros + bots):", `${message.guild.members.size}`, true)
        .addField("Nivel de verificacion:", verifLevels[message.guild.verificationLevel], true)
        .addField("Cantidad de canales:", message.guild.channels.size, true)
        .addField("Cantidad de roles:", message.guild.roles.size, true)
        .addField("Creado el:", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setColor("#EE82EE")
        .setFooter('Bot desarrollado por Pabszito#7790', client.user.avatarURL);
    message.channel.send(embed);
}

module.exports.help = {
    name: "serverinfo"
}
