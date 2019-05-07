const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embed = new Discord.RichEmbed()
  .setDescription('**Yapımcım ile iyi anlaşıyoz işte yapımcım** \n\n <@426454002863964161>') //Oraya sizin id niz.
  .setColor("RED")
            
            

  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sahip", "yapımcım"],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'Botun Yapımcısını Gösterir',
  usage: 'yapımcı'
};