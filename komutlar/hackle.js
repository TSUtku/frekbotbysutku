const Discord = require ("discord.js")

exports.run = function(client, message, args)  {

let yuklenıyor = client.emojis.get("667334312110194702")
let hazır = client.emojis.get("665203798914105345")
  
var etiketlenenkisi = message.mentions.users.first(); 

if (!etiketlenenkisi) return message.channel.send("Lütfen Hacklenmek İÇin Birini Etiketleyiniz Örnek: w!hackle @[MR]Tiger#7813")

message.channel.send(`${yuklenıyor}` + etiketlenenkisi + `HACKLENİYOR ${yuklenıyor} `).then(async msg => {
    setTimeout(() => {
        msg.edit(`${yuklenıyor} HACKLENİYOR ${yuklenıyor}`);
    }, 2000);
  setTimeout(() => {
        msg.edit(`${hazır} HACKLENDİ ${hazır}`);
    }, 3000);
  setTimeout(function() {
message.author.send(etiketlenenkisi + "Hacklendi e-posta ve şifre:" + etiketlenenkisi + "@gmail.com:1234Aa**")
}, 4000);
});
};

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['hack', 'hekle'], 
  permLevel: 0 
};

exports.help = {
  name: 'hackle', 
  description: 'Etiketlediğiniz Kişiyi Hackler', 
  usage: 'hackle <@kişi>'
  };