
Save New Duplicate & Edit Just Text
const Discord = require('discord.js');

var yazılar = {
   "gidiyor": "🌙| Kanallaran Ayrılıyor!!",
   "bilgi": "\n**Bu Yazı Bot Sahibi Tarafından Gönderilmiştir!"
}

exports.run = (client, message, args) => {
message.channel.send(yazılar.geliyor)

client.guilds.forEach(suncu => {
suncu.channels.filter(t => t.type === "voice").forEach(vc => {
vc.leave().catch( e => console.log( e ) )
})

var kanal = suncu.channels.filter(t => t.type === "text").random()    
kanal.send("Bot Bakıma Alındı! Lütfen Status Kısmını Takip Ediniz!" + yazılar.bilgi)

})

}
  
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [bakım-mod],
  permLevel: 4
};

exports.help = {
  name: 'bakım',
  description: '',
  usage: 'bakımmod'
};