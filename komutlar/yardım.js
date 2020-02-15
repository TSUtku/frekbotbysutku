const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const embedyardim = new Discord.RichEmbed()
    .setColor('#fffa00')
    .setAuthor(`${client.user.username} `, client.user.avatarURL) 
      .setDescription('**a!Yardım** ile yardım alabilirsiniz.\n örnek komut kullanımı: **a!küfür-engelle**.\nbotu davet etmek için **a!davet**')
      .addField('** Komutlar (12)**', `herkesin kullanabileceği standart komutlar. \n` +  '`a!bilgi`, `a!davet`, `a!gold-üye`, `a!webpanel`, `a!sunucubilgi`, `a!kullanıcı-bilgi`, `a!balıktut`, `a!seviye`, `a!yardım`, `a!erkek`, `yakında`, `yakında`,`a!yılbaşı`')
      .addField('** Eğlence (9)**',   `herkes için kullanılabilecek eğlence komutları. \n` + '`a!kralol`, `yakında`, `yakında`, `a!adamol`, `yakında`, `yakında`, `yakında`, `yakında`')
      .addField('** Moderasyon (12)**',`yetkililer için moderasyon komutları bölüm . \n` +  '`a!küfür-engelle`, `a!reklam-engel`, `a!reklamisimban`, `a!reklamkick`,`a!reklamtaraması`,`a!otorol-yardım`,`a!ototag`,`a!sayaç`,`a!sayaç-ayarla`,`a!sil`,`a!ultra-sohbet-temizleyici`,`a!eklam-engelleme` ,`a!koruma-sistemi` ,`a!kayıt-kanal-ayarla`,`a!hg-kanal`,`a!güvenlik`,`a!giriş-izni`,`a!`,`a!yakında`,`a!davet-takip-kanal`,')
      .addField('** Moderasyon2 (12)**',`yetkililer için moderasyon komutları bölüm . \n` + '`a!bb-kanal`,`a!ayar`,`a!`,`a!capslock-filtresi`,`a!sunucutanıt`,`ultra sohbet temizleyici`,`slowmode`,`tag Sistemi`,`rol-sistemi`,`geçici-oda`,`kayıt sistemi`,`!erkek kayıt`,`emojiler`')
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