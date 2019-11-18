const {Util,RichEmbed} = require('discord.js');
const {TeamTrees} = require('teamtrees-api');
const teamTrees = new TeamTrees();

function changeBlankMessage(message){
    return Util.escapeMarkdown(message !== "" || null || undefined ? message : `Ninguno`);
}

function oneOrMore(message){
    return message === "1" ? message + " arbol" : message + " arboles";
}

module.exports.run = async(client, message, args) => {

    let recentDonation = await teamTrees.getMostRecent();
    let recentDonationAuthor = recentDonation[0].name;
    let recentDonationQuantity = oneOrMore(recentDonation[0].trees);
    let recentDonationMessage = changeBlankMessage(recentDonation[0].message);
    let recentDonationDate = recentDonation[0].date;
    
    let topMost = await teamTrees.getMostTrees();
    let mostDonatedTreesAuthor = topMost[0].name;
    let mostDonatedTreesQuantity = oneOrMore(topMost[0].trees);
    let mostDonatedTreesMessage = topMost[0].message;
    let mostDonatedTreesDate = topMost[0].date;
    
    let left = await teamTrees.getLeft();
    let treesLeft = left.treesLeft.amount.fixed;
    let donatedTrees = await teamTrees.getTotalTrees(true);
    let daysLeft = left.daysLeft;
    let daysLeftFormatted = daysLeft === "1" ? `${daysLeft} dia` : `${daysLeft} dias`;

    let embed = new RichEmbed()
    .setTitle("Estadisticas de TeamTrees")
    .setDescription(`Aqui tienes las estadisticas de [#teamtrees](https://teamtrees.org)!`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/496109226360569884/645837737538224139/emote.png`)
    .addField(`**Arboles donados:**`, `${donatedTrees}`)
    .addField(`**Arboles faltantes:**`, `${treesLeft}`)
    .addField(`**Donacion reciente:**`, 
        `**Autor:** \`${recentDonationAuthor}\`
        **Cantidad:** \`${recentDonationQuantity}\`
        **Mensaje:** \`${recentDonation[0].message ? recentDonation[0].message : 'Ninguno'}\`
        **Fecha:** \`${recentDonationDate}\``)
    .addField(`**Donación más grande:**`, 
        `**Autor:** \`${mostDonatedTreesAuthor}\`
        **Cantidad:** \`${mostDonatedTreesQuantity}\`
        **Mensaje:** \`${topMost[0].message ? topMost[0].message : 'Ningunor'}\`
        **Fecha:** \`${mostDonatedTreesDate}\``)
    .addField("**Dias restantes:**", `${daysLeftFormatted}`)
    .setColor("#ee82ee")
    .setFooter("Bot desarrollado por Pabszito#7790", client.user.avatarURL)

    message.channel.send(embed);
}

module.exports.help = {
    name: 'teamtrees'
}