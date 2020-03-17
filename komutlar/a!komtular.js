const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('**a!Yardım** ile yardım alabilirsiniz.\n örnek komut kullanımı: **a!küfür-engelle**.\nbotu davet etmek için **a!davet**')
      .addField('** a!Komutlar (13)**', `herkesin kullanabileceği standart komutlar. \n` +  '`a!bilgi`, ')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'komutlar',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};