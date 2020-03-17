const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('**a!Yardım** ile yardım alabilirsiniz.\n örnek komut kullanımı: **a!küfür-engelle**.\nbotu davet etmek için **a!davet**')
      .addField('** Komutlar (13)**', `herkesin kullanabileceği standart komutlar. \n` +  '`a!bilgi`, ')
      .addField('** Eğlence (9)**',   `herkes için kullanılabilecek eğlence komutları. \n` + '`a!kralol`')
      .addField('** Moderasyon (22)**',`yetkililer için moderasyon komutları bölüm . \n` +  '`a!küfür-engelle`,')
     .addField('** Moderasyon2 (13)**',`yetkililer için moderasyon komutları bölüm . \n` + '`a!bb-kanal`, ')
     .addField('** YENİLİKLER (9**',   `herkes için kullanılabilecek yenilikler komutları. \n` + '`a!premium`,')
    .addField('** MÜZİK KODLARI(9**',   `MÜZİK KODLARI @MERVEAKALS. \n` + '`GELDİ`, ')
 .addField('**SEVİYE SİSTEMİ**',   `Seviye sistemleri **SADECE YETKİLİLER KULLANABILIR**. \n` + '`a!seviye ödüller [belirli seviyeye gelince o rölü verme]`,  ')
 .addField('**SUNUCU İÇİN İDEAL(9**',   `Koruma sistemlerine kadar \n` + '`a!kanal-koruma`,  ')
    .addField('**Premium**',   `sadece premium olanlar kullanabilir. [1 yıl ücretiz açıktır] \n` + '`a!reklam-isim-ban`,')
    .setFooter(`© ${client.user.username} ` , client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embedyardim).catch()
    
//////`${client.user.username}`
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["h", "halp", "help", 'y', 'yadrım'],
    permLevel: 0
};

exports.help = {
    name: 'yardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};