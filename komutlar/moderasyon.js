const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  
const embed = new Discord.RichEmbed()  
.setAuthor("MR|Eagles Moderasyon menüsü", client.user.avatarURL)
.setColor('Random')
.setTimestamp()
.setDescription("Modrasyon komutlar 1 ")
.addField("• a! 》>", "")