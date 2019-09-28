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

module.exports.run= async(client, message, args) => {
    const user = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    let target = message.mentions.users.first() || message.author;
    
    if(user.user.bot){
        isbot = "Si"; // si el "usuario" es un bot, isbot sera "Si"
    }else{
        isbot = "No"; // de lo contrario, sera "No"
    }
  
    if(user.nickname != null){
        nickname = user.nickname; // si el usuario/bot tiene nickname, "nickname" sera el nickname (explicaciones 100tificas lul)
    }else{
        nickname = "Ninguno"; // de lo contrario, sera "Ninguno"
    }
    
    const embed = new Discord.RichEmbed()
    .setTitle("Informacion") // titulo
    .setDescription("Aqui esta la informacion que estabas pidiendo.") // descripcion
    .addField("Nombre completo:", user.user.tag, false) // field numero 1
    .addField("Bot:", isbot, false) // field 2
    .addField("ID:", user.user.id, false) // field 3
    .addField("Nickname:", nickname, false) // field 4
    .addField("Estado:", userstatus[user.user.presence.status], false) // field 5
    .addField("Fecha de creacion:", `${user.user.createdAt.toUTCString().substr(0, 16)} (${checkDays(user.user.createdAt)})`/*user.user.createdAt*/, false) // field 6
    .addField("Roles", `${user.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" , ") || "Sin roles"}`, false); // field 7
    embed.setColor("#EE82EE"); // color
    embed.setFooter('Bot desarrollado por Pabszito#7790', 'https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048'); // footer
    message.channel.send({embed});
}
module.exports.help = {
    name:"userinfo"
}