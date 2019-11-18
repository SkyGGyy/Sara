const Discord = require('discord.js');

const userstatus = {
    online: "<:online:622316661298561034> En linea", // Icono de online
    idle: "<:idle:622316661336309760> Ausente", // Ausente
    dnd: "<:dnd:622316660745043968> No molestar", // No molestar
    offline: "<:offline:622316661328052226> Desconectado/Invisible" // Desconectado o Invisible
}
let isbot = "";
let nickname = "";

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " un dia" : " dias") + " atras";
};

module.exports.run = async (client, message, args) => {
    const user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author;

    if (user.user.bot) return isbot = "Si";
    else isbot = "No";

    if (user.nickname != null) return nickname = user.nickname;
    else nickname = "Ninguno";

    let embed = new Discord.RichEmbed()
        .setTitle("Informacion") // titulo
        .setDescription("Aqui esta la informacion que estabas pidiendo.") // descripcion
        .addField("Nombre completo:", user.user.tag, false) // field numero 1
        .addField("Bot:", isbot, false) // field 2
        .addField("ID:", user.user.id, false) // field 3
        .addField("Nickname:", nickname, false)
        .addField("Estado:", userstatus[user.user.presence.status], false)
        .addField("Fecha de creacion:", `${user.user.createdAt.toUTCString().substr(0, 16)} (${checkDays(user.user.createdAt)})`/*user.user.createdAt*/, false) // field 6
        .addField("Roles", `${user.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" , ") || "Sin roles"}`, false); // field 7
    embed.setColor("#EE82EE"); // color
    embed.setFooter('Bot desarrollado por Pabszito#7790', client.user.avatarURL); // footer
    message.channel.send({embed});
}
module.exports.help = {
    name: "userinfo"
}