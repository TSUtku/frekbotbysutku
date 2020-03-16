const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
  
para = await db.fetch(`puan_${message.guild.id}_${kişi.id}`)
}
message.channel.send(`Kişi; ${kişi}\nPuan; `+para)

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "puan"
};

exports.help = {
  name: 'puanım',
  description: 'Günlük ödül alırsınız.',
  usage: 'günlük',
   
};