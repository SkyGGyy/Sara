const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.channel.send("<:error:619698101447294977> Debes especificar una pregunta");

    const respuestas = ["En mi opinión, sí", "Es cierto", "Es decididamente así", "Probablemente", "Buen pronóstico", "Todo apunta a que sí", "Sin duda", "Sí", "Definitivamente", "Debes confiar en ello", "Respuesta vaga, vuelve a intentarlo", "Pregunta en otro momento", "Será mejor que no te lo diga ahora", "No puedo predecirlo ahora", "Concéntrate y vuelve a preguntar", "Puede ser", "No cuentes con ello", "Mi respuesta es no", "Mis fuentes me dicen que no", "Las perspectivas no son buenas", "Muy dudoso", "Sabes? 9 de 10 odontologos recomiendan que te calles..."]; // recien copia3 del bot de viruscrafters

    let resultado = Math.floor((Math.random() * respuestas.length));
    let pregunta = args.join(" ");

    const embed = new Discord.RichEmbed()
    .setTitle("🎱 8ball")
    .setDescription(`Mi respuesta es ${resultado}`)
    .setColor("#EE82EE")
    .setFooter('Bot desarrollado por Pabszito#7790', 'https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048'); // footer
    message.channel.send(embed);
    // puto el que lo lea
}

module.exports.help = {
    name: '8ball'
}