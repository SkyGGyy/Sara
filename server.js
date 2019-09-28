const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./botconfig.json");
const prefix = config.botprefix; // Prefix
const token = config.token; // Bot token
const fs = require("fs");
const utils = require('./utils.json');
client.commands = new Discord.Collection();
client.queue = new Map();

fs.readdir("./commands", (err, files) => {
    if(err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if(jsfiles.length <= 0) { // Si la cantidad de archivos es 0 o menos, responder con "return;"
        console.log("[INFO] No se encontraron comandos para cargar"); // Informar a la consola que no hay comandos para cargar
        return;
    }

    console.log(`[INFO] Cargando ${jsfiles.length} comandos!`); // Informar a la consola que se estan cargando x cantidad de comandos

    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`[INFO] ${f} cargado!`); // Informar a la consola que se terminaron de cargar los archivos
        client.commands.set(props.help.name, props);
    });
});

function statusChannel(){
    client.channels.get("619703165943545881").send("<:info:619693194862657566> Iniciando el bot, por favor espere...");
    function wait(){
        client.channels.get("619703165943545881").send("<:info:619693194862657566> El bot esta ahora en linea."); // Informa que el bot esta en linea
    }
    setTimeout(wait, 5000); // Esperar 5 segundos para enviar el mensaje
}

client.on('ready', async => {
    statusChannel();
    client.user.setActivity(client.guilds.size + " servidores!", {type: "WATCHING"}); // Muestra la cantidad de servidores en donde esta
    console.log(`[INFO] Sara esta lista. Sesion iniciada como ${client.user.tag}`); // Informa en la consola que el bot esta listo
    function updateActivity(){
        client.user.setActivity(client.guilds.size + " servidores!", {type: "WATCHING"}); // Muestra la cantidad de servidores en donde esta
    }
    setInterval(updateActivity, 10000); // Cada 10 segundos
});

client.on("message", async message => {

    const error = new Discord.RichEmbed()
    .setTitle("Hey!")
    .setDescription("Sara aun no soporta mensajes privados! Si crees que esto es un error, puedes contactar con un desarrollador.")
    .setColor("#EE82EE")
    .setFooter('Bot desarrollado por Pabszito#7790', 'https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048');

    if(message.author.bot) return; // Si el autor del mensaje es un bot, no hacer nada
    if(message.channel.type === "dm") return message.channel.send(error); // Si el mensaje es por privado, no hacer nada

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if(!command.startsWith("sptb!")) return; // Si el comando no empieza con el prefix indicado en la configuracion, no hacer nada

    console.log(`[INFO] ${message.author.tag} executed command ${command}`)
    
    let cmd = client.commands.get(command.slice(prefix.length)); // Obtener comando
    if(cmd) cmd.run(client, message, args); // Si el comando existe, ejecutarlo
});

client.on('guildCreate', async (guild) => {
    const embed = new Discord.RichEmbed()
    .setTitle("Hola!")
    .setDescription("Soy Sara, muchas gracias por añadirme a tu servidor :3")
    .addField("Obtener ayuda", "Para obtener ayuda sobre este bot, puedes simplemente utilizar el comando `s!help`. Siempre que lo utilizes, mandare un mensaje al mismo canal donde lo enviaste con una lista de comandos y su respectiva funcion.", false)
    .addField("Soporte", "Para poder obtener soporte, puedes entrar a este discord, donde podras ser atendido por algun desarrollador. https://discord.gg/qRa7ckm \n Tambien puedes obtener informacion acerca del bot utilizando s!about.", false);
    embed.setColor("#EE82EE");
    embed.setFooter('Bot desarrollado por Pabszito#7790', 'https://cdn.discordapp.com/avatars/549379358914248724/679997bb2c5db236807fa73011e6d98c.png?size=2048');
    guild.owner.send({embed}).catch(console.error);
});

client.login(token); // Inicia sesion con la token del bot.