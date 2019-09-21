const Discord = require('discord.js');
const botconfig = require('../botconfig.json');
var Weez = require('weez');
var weez = new Weez.WeezAPI(botconfig.weezkey);

module.exports.run = async(client, message, args) => {
    let img = await weez.randomMeme();
    message.channel.send({files: [img]}).then(m=>{m.react('😂')});
}

module.exports.help = {
    name:"meme"
}