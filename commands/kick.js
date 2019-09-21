const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    let user = message.mentions.users.first();
    let razon = args.slice(1).join(' ');        
    const perms = message.member.hasPermission("KICK_MEMBERS");

    if(!perms) return message.channel.send("<:error:619698101447294977> Permisos insuficientes.");
    if (message.mentions.users.size < 1) return message.channel.send('<:error:619698101447294977> Debes mencionar a alguien.').catch(console.error);
    if (!razon) return message.channel.send('<:error:619698101447294977> Debes especificar una razon.');
    if (!message.guild.member(user).kickable) return message.channel.send('<:error:619698101447294977> No puedo kickear al usuario mencionado.');
    
    user.send("**Fuiste kickeado!**\n" +
           `Staff: ${message.author}\n` +
           `Razon: ${razon} \n` +
           `Servidor: ${message.guild.name}`).catch(console.error);
    
    
    function continueKick(){
        message.guild.member(user).kick(razon);
    }       
    setTimeout(continueKick, 1000);
    
    const embed=new Discord.RichEmbed()
        .setTitle("Usuario kickeado")
        .setDescription('Un usuario ha sido kickeado!')
        .addField("Staff:",message.author,false)
        .addField("Usuario:",user,false)
        .addField("Razon:", razon,false);
    embed.setColor("#EE82EE");
    embed.setFooter('Bot desarrollado por Pabszito#7790', 'https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048');
    message.channel.send({embed});
}

module.exports.help = {
    name:"kick"
}