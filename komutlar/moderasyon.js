const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const embed = new Discord.RichEmbed()  
.setAuthor("MR|Eagles Moderasyon menüsü", client.user.avatarURL)
.setColor('Random')
.setTimestamp()
.setDescription("Modrasyon komutlar 1 ")
.addField("• a!Çekiliş-yap 》>", "Çekiliş yapar")
.addField("• a!ban-koruma 》>", "Ban koruma log kanalı")
.addField("• a!banlimit 》>", "Ban Limit ayarlar")
.addField("• a!bb-kanal a!hg-kanal 》>", "giren çıkan kanal ayarlar")
.addField("• a!ban-koruma-sıfırla》>", "Ban koruma sıfırlar")
.addField("• a!koruma》>", "SUNUCUNU ULŞTRA ŞEKİLDE KORUR")
.addField("• a!spambotkorumasi》>", "Spam bot koruması")
.addField("• a!giriş-sistemi》>", "Giriş sistemi ayarlarsın")
.addField("• a!spambotkorumasi》>", "Spam bot koruması")
