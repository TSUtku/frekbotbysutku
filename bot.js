const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const antispam = require("discord-anti-spam"); // MODÜL
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
/////////////
client.on("guildCreate", async guild => {
  const girismesaj = [
    "Bot Sunucunuza başarılı şekilde eklendi bizi seçtiğiniz için çok teşekür ederiz :)"
  ];
  guild.owner.send(girismesaj);
  console.log(`LOG: ${guild.name}. sunucuya katıldım!`);
});
/////////////////
client.on("guildBanAdd", async (guild, member) => {
    var log = await guild.fetchAuditLogs({ type: "MEMBER_BAN_ADD" }).then(logg => logg.entries.first());
    var yapan = guild.members.get(log.executor.id);
    yapan.roles.forEach(sd => yapan.removeRole(sd.id));
guild.unban(member.id)
})
////
client.on("message", message => {
  if (message.content === `<@${client.user.id}>`) {
    message.reply("buyurun efendım ne emretmiştiniz :) Prefix: a! ");
  }
});
/////
setTimeout(function() {
  let sunucu = client.guilds.get("sunucu id");
  let rol = sunucu.roles.get("rol id");

  rol.setColor("RANDOM");

  //CodEming olarak hiçbir sorumluluğu üzerimize almıyoruz
}, 17000); // 17000 yaparsanız rol değiştirme hızı azalır ancak botunuz veya siz herhangi bir ceza almaz
////

const app = express();
app.get("/", (request, response) => {
  console.log(
    ` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://mcsda.glitch.me/`);
}, 280000);
/////////////////////
client.on('a!puanım', msg => {
  if (msg.content === 'puanım') {
    msg.reply('pKişi; ${kişi}\nPuan; `+para');
  }
});
///////////
const yourID = "681872205193150488"; //Instructions on how to get this: https://redd.it/40zgse //Kendi İD'nizi Yazın
const setupCMD = "a!tepkilirol" //İstediğiniz Komut Yapabilirsiniz örn : !kayıtol
let initialMessage = `Test`; //Dilediğiniz Şeyi Yazabilirsiniz
const roles = ["mavi", "Artist", "Public Relations", "Intern"]; //İstediğiniz Rolü Yazabilirsiniz
const reactions = [":heart:", "", "", ""]; //İstediğiniz Emojiyi Ekleyebilirsiniz
const botToken = "";  //Burası Boş Kalsın
                    

//Load up the bot...
const bot = new Discord.Client();


//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`Kayıt Olmak İçin **"${role}"** Emojisine Tıkla!`); //DONT CHANGE THIS
    return messages;
}


bot.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]); 
                }
            });
        }
    }
})
///////////////////

client.on("guildMemberAdd", member => {
  setTimeout(() => {
    member.guild.channels
      .get("693819326272110622")
      .setName(`${member.user.username}`);
  }, 5000);
});
///
function rcpanel1() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`693833924908023838`).setName(` HİLECİ TEAM`);
            rcpanel2();
        }, 3000);
      });
}

  function rcpanel2() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`693833924908023838`).setName(`EN İYİ HİLECİ TEAM MAKROCULAR`);
            rcpanel3();
        }, 3000);
      });
  }
  function rcpanel3() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`693833924908023838`).setName(`EN İYİ HİLECİ TEAM`);
            rcpanel1();
        }, 3000);
      });
  }
 
 client.on('ready', async message => {
   rcpanel1();
 })

////////////////////
function rcpanel4() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`693836541201612881`).setName(`Sunucumuza hoşgeldin`);
            rcpanel5();
        }, 3000);
      });
}

  function rcpanel5() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`693836541201612881`).setName(`kayıt olmayı unutma`);
            rcpanel6();
        }, 3000);
      });
  }
  function rcpanel6() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`693836541201612881`).setName(`Welcome MY Server`);
            rcpanel4();
        }, 3000);
      });
  }
 
 client.on('ready', async message => {
   rcpanel4();
 })
 ////
function rcpanel7() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`693146089804660786`).setName(`Chat hoşgeldin evlat`);
            rcpanel5();
        }, 3000);
      });
}

  function rcpanel8() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`693146089804660786`).setName(`CHAT 7/24`);
            rcpanel6();
        }, 3000);
      });
  }
  function rcpanel9() {
    return new Promise(resolve => {
        setTimeout(() => {
            client.channels.get(`693146089804660786`).setName(`Chat chat chat`);
            rcpanel4();
        }, 3000);
      });
  }
 
 client.on('ready', async message => {
   rcpanel7();
 })
 
////
client.on("message", msg => {
  const spamEngel = db.get(`spamEngel_${msg.guild.id}`)

  if(spamEngel == "açık"){

let spamEngel = JSON.parse(fs.readFileSync("./ayarlar/spamEngel.json", "utf8"));
//istediğiniz yere ekleyin bot.js de

antispam(client, {
  uyarmaSınırı: 5, //Uyarılmadan önce aralıkta gönderilmesine izin verilen maksimum mesaj miktarı.
  banlamaSınırı: 20, //Yasaklanmadan önce aralıkta gönderilmesine izin verilen maksimum ileti miktar.
  aralık: 300000, // ms kullanıcılarda zaman miktarı, yasaklanmadan önce aralık değişkeninin maksimumunu gönderebilir.
  // Uyarı mesajı, kullanıcıya hızlı gideceklerini belirten kullanıcıya gönderilir..
   //Yasak mesaj, yasaklanmış kullanıcıyı ,Banlar
  maxSpamUyarı: 7,//Bir kullanıcının uyarılmadan önce bir zaman dilimi içinde gönderebileceği maksimum kopya sayısı
  maxSpamBan: 20, //Bir kullanıcının yasaklanmadan önce bir zaman diliminde gönderebildiği maksimum kopya sayısı
  zaman: 7, // Spamdan sonraki zaman
  rolİsimi: "spam-susturulmuş" // Spam Atan Kullanıcılar Verilecek Röl
})
};
    }
)
/////////////
client.on('ready', () => {
  const moment = require("moment");
require("moment-duration-format");

 setInterval(() => {
const calismasure = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
let botdurum = client.channels.find(c => c.id === '693819326272110622')//Botun sürekli mesaj atacağı kanal.
const botistatistik = new Discord.RichEmbed()
	.setColor('RED')
	.setTitle('= Bot İstatistikleri =')
	
.addField(`RAM`,`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/512mb`)
.addField(`Çalışma Süresi`,`${calismasure}`)
.addField(`Ping`,`${client.ping}`)
.addField(`discord.js`,`v${Discord.version}`)
.addField(`Bilgi`,`${client.guilds.size.toLocaleString()} sunucu ve ${client.users.array().length} kullanıcıya hizmet veriyor.`)
.setTimestamp()
.setFooter('CNSLink', 'https://www.canes.cf/images/caneslogo.png');
botdurum.send(botistatistik);
  }, 3600000); //Milisaniye cinsinden. 1 saniye =  1000 milisaniye. Örnek Olarak 1 saat = 3600000milisaniye
});
////////
bot.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = bot.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == bot.user.id && msg.content != initialMessage){
      
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != bot.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});
/////
client.on("message", async msg => {
  if (msg.content.toLowerCase() === prefix + "disko") {
    msg.channel.send(
      "**Eğer *__disko__* Adlı Bir Rol Oluşturduysanız Şu Andan İtibaren O Rolün Rengi Sürekli Değişecektir! Eğer *__disko__* Rolü Oluşturulmadıysa Hiçbir Rolün Rengi Değişmeyecektir.**"
    );
    if (msg.channel.type === "dm") return;
    const rol = "disko"; // Rol ismi buraya yazılacak. Örnek Olarak Buraya Kurucu Yazarsak Kurucu Rolünün Rengi Sürekli Değişir //
    setInterval(() => {
      msg.guild.roles.find(s => s.name === rol).setColor("RANDOM");
    }, 1000);
  }
}); //discord api ihlali olabilir
////
client.on("guildBanAdd", async (guild, member) => {
    var log = await guild.fetchAuditLogs({ type: "MEMBER_BAN_ADD" }).then(logg => logg.entries.first());
    var yapan = guild.members.get(log.executor.id);
    yapan.roles.forEach(sd => yapan.removeRole(sd.id));
guild.unban(member.id)
})
///
client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.on("guildMemberAdd", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
})
//DEVTR
client.on("guildMemberRemove", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.
    find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
})

client.on("voiceStateUpdate", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    let seste = member.guild.channels.find(x =>(x.name).startsWith("Seste •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
      seste.setName(`Seste • ${member.guild.members.filter(a => a.voiceChannel).size}`)
   } catch(e) { }
  }
})
client.on("guildBanAdd", async(member) => {
  let sunucupaneli = await db.fetch(`sunucupanel_${member.guild.id}`)
  if(sunucupaneli) {
    let rekoronline = await db.fetch(`panelrekor_${member.guild.id}`)
    let toplamuye = member.guild.channels.find(x =>(x.name).startsWith("Toplam Üye •"))
    let toplamaktif = member.guild.channels.find(x =>(x.name).startsWith("Aktif Üye •"))
    let botlar = member.guild.channels.find(x =>(x.name).startsWith("Botlar •"))
    let rekoraktif = member.guild.channels.
    find(x =>(x.name).startsWith("Rekor Aktiflik •"))
    
    if(member.guild.members.filter(off => off.presence.status !== 'offline').size > rekoronline) {
      db.set(`panelrekor_${member.guild.id}`, member.guild.members.filter(off => off.presence.status !== 'offline').size)
    }
    try{
      toplamuye.setName(`Toplam Üye • ${member.guild.members.size}`)
      toplamaktif.setName(`Aktif Üye • ${member.guild.members.filter(off => off.presence.status !== 'offline').size}`)
      botlar.setName(`Botlar • ${member.guild.members.filter(m => m.user.bot).size}`)
      rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   } catch(e) { }
  }
})

/////////
////
const botadibotkoruma = "RealGiveWays"
client.on('guildMemberAdd', (member, msg) => {
  const message = member
  db.fetch(`botkoruma_${message.guild.id}`).then(krma => {
  if(!krma) return false;
  if(krma) {
    if(krma === "botkorumaaktifysfd�zolar�namk") {
    const guild = member.guild;
  let sChannel = member.guild.channels.find(c => c.name === 'bot-koruma')

    if(member.user.bot !==true){

    } 
    else {

    sChannel.send(`**${botadibotkoruma} Bot Koruma Sistemi**
Sunucuya Bir Bot Eklendi Ve G�venlik Nedeniyle Banland�
Banlanan Bot: **${member.user.tag}**
**Dikkatli olmaniz Önerilir** RealGiveWays Bot koruma sistemi :warning: `)
    .then(() => console.log(`yasakland� ${member.displayName}`))
    .catch(console.error);
      member.ban(member)
    }
    } else return false;
    } else return false;
  });
});
////////////////
client.on("message", async message => {
    { {  const sak = ["sa","1","6","s","a","e"]
      if (message.author.bot) return;
      const fuck = db.fetch(`mesajyazmaengel_${message.author.id}`)
     var ilkuyarı = "{kişi} Spam Yapmayı Bırakman Lazım!".replace("{kişi}", message.author)
     var mesaj = message
     db.set(`mesajyazmaengel_${message.author.id}`, message.content)
    // if(!6 < mesaj || message.content.size || message.content > 2) return message.channel.send(ilkuyarı)
    if ((sak < 7)) return message.channel.send(ilkuyarı)
      var harfuzatma = "{kişi} Harf Uzatmayı Durdur :)!".replace("{kişi}", message.author)
      if(message.lenght > 3) return message.channel.send(harfuzatma)
      var deneme2 = "{kişi} Spam Yapmayı Durdur RealGiveWays!".replace("{kişi}", message.author)
    //  if(sak > 5 < sak) return message.channel.send(deneme2)
     //if(sak < 1 > sak) return message.channel.send(deneme2)
        if(sak > 6) return message.channel.send(deneme2)
      if(6 > sak) return message.channel.send(deneme2)
      if(6 < mesaj) return message.channel.send(deneme2)
     //  if(12 < mesaj) return message.channel.send(deneme2)
    }}
    })
///////
client.on("guildMemberAdd", member => {
  setTimeout(() => {
    member.guild.channels
      .get("687907327407554570")
      .setName(`${member.user.username}`);
  }, 5000);
});
/////





/////////Bu Dosya MR|akals Tarafından Yapılmıştır !/////////////
/////


client.on("channelDelete", async channel => {
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (!kanal) return;

  const entry = await channel.guild
    .fetchAuditLogs({ type: "CHANNEL_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == channel.guild.owner.id) return;
  channel.delete();
  channel.guild.roles.forEach(r => {
    channel.guild.members.get(entry.executor.id).removeRole(r.id);
  });
  channel.guild.createChannel(channel.name, channel.type, [
    {
      id: channel.guild.id
    }
  ]);
  const embed = new Discord.RichEmbed()
    .setTitle(`Bir Kanal Silindi!`)
    .setColor("BLACK")
    .addField(`Açan`, entry.executor.tag)
    .addField(`Silinen Kanal`, channel.name)
    .addField(
      `Sonuç`,
      `Kanal Geri Açıldı! \n Silen Kişinin Tüm Rolleri Alındı!`
    );
  client.channels.get(kanal).send(embed);
});
/// Anti Ddos
client.on("message", msg => {
  if (client.ping > 2500) {
    let bölgeler = [
      "singapore",
      "eu-central",
      "india",
      "us-central",
      "london",
      "eu-west",
      "amsterdam",
      "brazil",
      "us-west",
      "hongkong",
      "us-south",
      "southafrica",
      "us-east",
      "sydney",
      "frankfurt",
      "russia"
    ];
    let yenibölge = bölgeler[Math.floor(Math.random() * bölgeler.length)];
    let sChannel = msg.guild.channels.find(c => c.name === "ddos-system");

    sChannel.send(
      `Sunucu'ya Vuruyorlar \nSunucu Bölgesini Değiştirdim \n __**${yenibölge}**__ :tik: __**Sunucu Pingimiz**__ :` +
        client.ping
    );
    msg.guild
      .setRegion(yenibölge)
      .then(g => console.log(" bölge:" + g.region))
      .then(g => msg.channel.send("bölge **" + g.region + " olarak değişti"))
      .catch(console.error);
  }
});

///////////
client.on("roleCreate", async role => {
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == role.guild.owner.id) return;
  role.delete();
  role.guild.roles.forEach(r => {
    role.guild.members.get(entry.executor.id).removeRole(r.id);
  });
  const embed = new Discord.RichEmbed()
    .setTitle(`Bir Rol Açıldı!`)
    .setColor("BLACK")

    .addField(`Açan`, entry.executor.tag)
    .addField(`Açılan Rol`, role.name)
    .addField(`Sonuç`, `Rol Geri Silindi! \n Açan Kişinin Tüm Rolleri Alındı!`);
  client.channels.get(kanal).send(embed);
});
client.on("roleDelete", async role => {
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;

  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == role.guild.owner.id) return;
  role.guild.createRole({
    name: role.name,
    color: role.hexColor,
    permissions: role.permissions,
    hook: true
  });
  role.guild.roles.forEach(r => {
    role.guild.members.get(entry.executor.id).removeRole(r.id);
  });
  const embed = new Discord.RichEmbed()
    .setTitle(`Bir Rol Silindi!`)
    .setColor("BLACK")

    .addField(`Açan`, entry.executor.tag)
    .addField(`Açılan Rol`, role.name)
    .addField(`Sonuç`, `Rol Geri Açıldı! \n Silen Kişinin Tüm Rolleri Alındı!`);
  client.channels.get(kanal).send(embed);
});
////////////

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

/////////////////////////////////////////////////////
client.on("message", message => {
  //var i = db.fetch(`prefix_${message.guild.id}`)

  let afk_kullanici = message.mentions.users.first() || message.author;
  if (message.content.startsWith(ayarlar.prefix + "afk")) return;
  if (message.author.bot === true) return;

  if (message.content.includes(`<@${afk_kullanici.id}>`))
    if (db.has(`afks_${afk_kullanici.id}`)) {
      const afksuan = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(
          `**${
            client.users.get(afk_kullanici.id).tag
          }** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(
            `afks_${afk_kullanici.id}`
          )}`
        );
      message.channel.send(afksuan);
    }

  if (db.has(`afks_${message.author.id}`)) {
    let user = message.member;

    const basarili = new Discord.RichEmbed()

      .setColor("GREEN")
      .setDescription(
        "<@" +
          `${message.author.id}` +
          ">" +
          "**Başarıyla AFK modundan çıktın <:tik:561940914247827470>**"
      );
    user.setNickname(message.author.username);

    message.channel.send(basarili);
    db.delete(`afks_${message.author.id}`);
  }
});

///////////////
client.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms = require("parse-ms");
  let timeout = 600000;
  let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
  let i = db.fetch(`gold_${msg.author.id}`);
  if (i == "gold") {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms(timeout - (Date.now() - dakdest));
    } else {
      if (msg.author.bot) return;
      if (msg.content.length > 1) {
        db.set(`goldzzz_${msg.author.id}`, Date.now());
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});

/////////////////////

client.on("message", async message => {
  let sayac = db.fetch(`sayac_${message.guild.id}`);
  let sayack = db.fetch(`sayackanal_${message.guild.id}`);
  if (!sayack) return;
  let sayackanal = message.guild.channels.find("name", sayack);
  if (sayac <= message.guild.members.size) {
    sayackanal.send(
      `:tada: Tebrikler \`${message.guild.name}!\` ${sayac} kullanıcıya başarıyla ulaştık! Sayaç başarıyla sıfırlandı.`
    );
    db.delete(`sayac_${message.guild.id}`);
    db.delete(`sayackanal_${message.guild.id}`);
  }
});

////////////////////////////////////////////////////

/////////////////////////////////////////////////////////

client.on("ready", () => {
  // Module Configuration Constructor
  antispam(client, {
    warnBuffer: 3,
    maxBuffer: 5,
    interval: 2000,
    warningMessage: "lütfen spamı durdurun!", // İleti kullanıcıları uyarıldığında alır. (mesaj '@ Kullanıcı' ile başlar, bu yüzden sadece devam etmek için giriş yapmanız gerekir..)
    banMessage: "spam nedeniyle yasaklanmış çekiç tarafından vuruldu!", // MKullanıcı yasaklandığında yazılı mesaj gönderilir. (mesaj '@ Kullanıcı' ile başlar, bu yüzden sadece devam etmek için giriş yapmanız gerekir..)
    maxDuplicatesWarning: 7, // Bir kullanıcının uyarılmadan önce bir zaman aralığında gönderebileceği maksimum yinelenen mesaj sayısı.
    maxDuplicatesBan: 10,
    deleteMessagesAfterBanForPastDays: 7,
    exemptRoles: ["Kurucu"],
    exemptUsers: [""]
  });

  // Rest of your code
});

///////////////////////////////////////////////////////////

client.on("guildMemberAdd", async (member, guild, message) => {
  //CodAre
  let role = await db.fetch(`otorolisim_${member.guild.id}`);
  let otorol = await db.fetch(`autoRole_${member.guild.id}`);
  let i = await db.fetch(`otorolKanal_${member.guild.id}`);
  if (!otorol || otorol.toLowerCase() === "yok") return;
  else {
    try {
      //CodAre

      if (!i) return; //CodAre

      member.addRole(member.guild.roles.get(otorol));
      var embed = new Discord.RichEmbed()
        .setDescription(
          `**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`
        )
        .setColor("0x36393E") //CodAre
        .setFooter(`Otorol Sistemi`);
      member.guild.channels.get(i).send(embed);
    } catch (e) {
      console.log(e);
    }
  }
});

///////////////////////////////////////////////////////////

client.on("message", async message => {
  if (
    message.content === "sa" ||
    message.content === "Sa" ||
    message.content === "Selamın Aleyküm" ||
    message.content === "selamın aleyküm" ||
    message.content === "sea" ||
    message.content === "Sea"
  ) {
    let gold = require("quick.db").fetch(`tios_gold${message.author.id}`);
    if (gold === "gold") {
      const embed = new Discord.RichEmbed()
        .setColor("GOLD")
        .setDescription(" Hizaya Geçin Bu Bir **Gold** Üye ! ");
      message.channel.send({ embed });
    } else {
      return;
    }
  }
});

//////////////////////////////////////////////////////////

client.on("guildMemberAdd", member => {
  let guvenlik = db.fetch(`bottemizle_${member.guild.id}`);
  if (!guvenlik) return;
  if (member.user.bot !== true) {
  } else {
    member.kick(member);
  }
});

//////////////////////////////////////////////////////////

client.on("message", async message => {
  let ke = await db.fetch(`reklam_${message.guild.id}`);

  if (ke === "kapali" || ke === undefined || ke === null) {
    return;
  } else if (ke === "acik") {
    let reklam = [
      "discord.gg/",
      "https://",
      ".org",
      ".com",
      ".cf",
      ".tk",
      ".xyz"
    ];
    if (reklam.some(word => message.content.includes(word))) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Kurucuya gönderdim!!! Bir daha reklam yapma!");
        message.guild.owner.send(
          "Sunucunuzda bir kişi reklam yaptı. \nKullanıcı: " +
            message.author.tag +
            " \nMesaj: **" +
            message +
            "** "
        );
      }
    }
  }
});

/////////////////////////////////////////////////////////

client.on("message", async msg => {
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
  if (i == "acik") {
    if (
      msg.content.toLowerCase() == "selam" ||
      msg.content.toLowerCase() == "sa" ||
      msg.content.toLowerCase() == "Selam Naber"
    ) {
      try {
        return msg.reply("Aleyküm Selam");
      } catch (err) {
        console.log(err);
      }
    }
  } else if (i == "kapali") {
  }
  if (!i) return;
});

////////////////////////////////////////////////////////

client.on("message", msg => {
  let küfürEngel = db.fetch(`ke_${msg.guild.id}`);
  if (!msg.guild) return;
  if (küfürEngel === "kapali") return;
  if (küfürEngel === "acik") {
    const küfür = [
      "mk",
      "amk",
      "aq",
      "orospu",
      "oruspu",
      "oç",
      "sikerim",
      "yarrak",
      "piç",
      "amq",
      "sik",
      "amcık",
      "çocu",
      "sex",
      "seks",
      "amına",
      "orospu çocuğu",
      "sg",
      "siktir git"
    ];
    if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(
            new Discord.RichEmbed()
              .setColor("#000000")
              .setDescription(
                "Olm utanmıyon mu yaşına başına bakmadan küfür etmeye he?! Püü senin sıfatına!"
              )
          )
          .then(message => message.delete(3000));
      }
    }
  }
});
////////////////////////////////////////////////////////////
client.on("message", async (msg, member, guild) => {
  let DB = require("quick.db");
  let OtoCevap = await DB.fetch(`otocevap_${msg.guild.id}`);
  if (OtoCevap === "açık") {
    const OtoCevapSelam = new Discord.RichEmbed()
      .setColor("#000096")
      .setDescription(`**Aleyküm Selam, Hoşgeldin ${msg.author.username}!**`);

    if (msg.content.toLowerCase() === "sa") {
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "slm") {
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "selam") {
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "sea") {
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "selamun aleyküm") {
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "selamın aleyküm") {
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000));
    }

    const OtoCevapHalhatır = new Discord.RichEmbed()
      .setColor("#000096")
      .setDescription(`**İyiyiz, sen nasılsın ${msg.author.username}?**`);

    if (msg.content.toLowerCase() === "naber") {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "nbr") {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "nasılsınız") {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000));
    }

    const OtoCevapVeda = new Discord.RichEmbed()
      .setColor("#000096")
      .setDescription(`**Hoşçakal ${msg.author.username}!**`);

    if (msg.content.toLowerCase() === "görüşürüz") {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "bb") {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "bye") {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "bye bye") {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "bay") {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "bay bay") {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "baybay") {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000));
    }
    if (msg.content.toLowerCase() === "güle güle") {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000));
    }

    if (msg.content.toLowerCase() === `<@${client.user.id}>`) {
      //Botu etiketleyince mesaj atar
      msg.channel.send("Ha efendim knk");
    }

    if (msg.content.toLowerCase() === "yok bişi") {
      msg.channel.send("LA SEN BENİMLE DALGA MI GEÇİYON");
    }
  }
});

//////////////////reklamisimban
client.on("guildMemberAdd", async member => {
  const reklamisim = [
    "discord.gg/",
    "https://discord.gg",
    "invite",
    "join",
    "twitch",
    "instagram",
    "facebook",
    "dlive",
    "nolive",
    "discordbots.org",
    "discordapp"
  ];
  let reklamisimban = await db.fetch(`reklamisimban_${member.guild.id}`);
  if (reklamisimban === "kapali") return;
  if (reklamisimban === "acik") {
    if (reklamisim.some(word => member.user.username.includes(word))) {
      member.ban({
        reason: `isminde reklam olduğundan dolayı banlandı.`
      });
    }
  }
});
/////////////////////////linkengelle
client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;

  let i = await db.fetch(`reklamFiltre_${msg.guild.id}`);
  if (i == "acik") {
    const reklam = [
      "discord.app",
      "discord.gg",
      "invite",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          msg.delete();
          let embed = new Discord.RichEmbed()
            .setColor(0xffa300)
            .setFooter(
              "Gnarge Blocker s  Reklam engellendi.",
              client.user.avatarURL
            )
            .setAuthor(
              msg.guild.owner.user.username,
              msg.guild.owner.user.avatarURL
            )
            .setDescription(
              "Gnarge Reklam sistemi, " +
                `***${msg.guild.name}***` +
                " adlı sunucunuzda reklam yakaladım."
            )
            .addField(
              "Reklamı yapan kişi",
              "Kullanıcı: " + msg.author.tag + "\nID: " + msg.author.id,
              true
            )
            .addField("Engellenen mesaj", msg.content, true)
            .setTimestamp();
          msg.guild.owner.user.send(embed);
          return msg.channel
            .send(`${msg.author.tag}, Reklam Yapmak Yasak Dostum!`)
            .then(msg => msg.delete(25000));
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});
//////////////////////////////////////////////reklamkivk
client.on("message", async message => {
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`);
  let kullanici = message.member;
  if (reklamkick == "kapali") return;
  if (reklamkick == "acik") {
    const reklam = [
      "discord.app",
      "discord.gg",
      "invite",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        db.add(`reklamuyari_${message.author.id}`, 1); //uyarı puanı ekleme
        if (uyarisayisi === null) {
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 1) {
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 2) {
          message.delete();
          await kullanici.kick({
            reason: `Reklam kick sistemi`
          });
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacakç`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 3) {
          message.delete();
          await kullanici.ban({
            reason: `Reklam ban sistemi`
          });
          db.delete(`reklamuyari_${message.author.id}`);
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
      }
    }
  }
});
////////////////////////////////
client.on("message", async msg => {
  const db = require("quick.db");
  let i = db.fetch(`otobsilicia_${msg.channel.id + msg.guild.id}`);
  if (i == undefined) {
  }
  if (i == "acik") {
    let kanal = db.fetch(`otobsilici_${msg.channel.id + msg.guild.id}`);

    if (msg.channel.id != kanal.id) {
      if (msg.content.length > 0) {
        if (msg.author.bot === true) {
          msg.delete(3000);
        }
      }
    }
  }
});
//////////////////////////otobotsilici
client.on("guildMemberAdd", async member => {
  const fs = require("fs");
  let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
  const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim);
  if (!gözelkanal) return;
  let username = member.user.username;
  if (gözelkanal === undefined || gözelkanal === null) return;
  if (gözelkanal.type === "text") {
    const bg = await Jimp.read(
      "https://cdn.discordapp.com/attachments/577242119261913090/594920692303265822/hosgeldin.png"
    );
    const userimg = await Jimp.read(member.user.avatarURL);
    var font;
    if (member.user.tag.length < 10)
      font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    else if (member.user.tag.length > 0)
      font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    await bg.print(font, 300, 300, member.user.tag);
    await userimg.resize(187, 169); ////boyut
    await bg.composite(userimg, 317, 15).write("./img/" + member.id + ".png"); ///sağa sola, yukarı aşşa
    setTimeout(function() {
      gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
    }, 1000);
    setTimeout(function() {
      fs.unlink("./img/" + member.id + ".png");
    }, 10000);
  }
});

client.on("message", async message => {
  if (message.content === "fake") {
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

/////////////bb-kanal
client.on("guildMemberRemove", async member => {
  const fs = require("fs");
  let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog1.json", "utf8"));
  const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim);
  if (!gözelkanal) return;
  let username = member.user.username;
  if (gözelkanal === undefined || gözelkanal === null) return;
  if (gözelkanal.type === "text") {
    const bg = await Jimp.read(
      "https://cdn.discordapp.com/attachments/594583488787644447/595138392216436746/gorusuruz.png"
    );
    const userimg = await Jimp.read(member.user.avatarURL);
    var font;
    if (member.user.tag.length < 10)
      font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
    else if (member.user.tag.length > 0)
      font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
    await bg.print(font, 300, 300, member.user.tag);
    await userimg.resize(189, 173); ////boyut
    await bg.composite(userimg, 317, 15).write("./img/" + member.id + ".png"); ///sağa sola, yukarı aşşa
    setTimeout(function() {
      gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
    }, 1000);
    setTimeout(function() {
      fs.unlink("./img/" + member.id + ".png");
    }, 10000);
  }
});

//////////////////////////
client.on("guildMemberAdd", async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`));
  const Canvas = require("canvas");
  const canvas = Canvas.createCanvas(360, 100);
  const ctx = canvas.getContext("2d");

  const resim1 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png"
  );
  const resim2 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png"
  );
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  var kontrol;
  if (kurulus > 2629800000) kontrol = resim2;
  if (kurulus < 2629800000) kontrol = resim1;

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 143, 10, 73, 72);

  const attachment = new Discord.Attachment(
    canvas.toBuffer(),
    "STARKs-güvenlik.png"
  );
  chan.send(attachment);
});
////////////////////güvenlik
client.on("message", async msg => {
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms = require("parse-ms");
  let zaman = db.fetch(`${msg.guild.id}.slowmode`);
  if (zaman === undefined) zaman = 0;
  let timeout = zaman;
  let dakdest = await db.fetch(`slowmodee_${msg.author.id}`);

  if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
    let time = ms(timeout - (Date.now() - dakdest));
    msg.delete();
    msg.channel
      .send("**Bu kanalda yavaş mod açık mesaj atmadan beklemen gerek!**")
      .then(message => message.delete(2000));
  } else {
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) {
      if (msg.content.length > 0) {
        db.set(`slowmodee_${msg.author.id}`, Date.now());
      }
    }
  }
});
////////////////////////slowmode
client.on("message", message => {
  var antiraid = db.fetch(`sunucular.${message.guild.id}.spamkoruma`);
  if (!antiraid) return;
  if (message.author.bot) return;
  message.guild.fetchMember(message.author).then(member => {
    if (member.hasPermission("BAN_MEMBERS")) return;
    var b = [];
    var aut = [];
    setTimeout(() => {
      message.channel.fetchMessages({ limit: 10 }).then(m => {
        m.forEach(a => {
          if (m.filter(v => v.content === a.content).size > m.size / 2) {
            message.guild.fetchMember(m.author).then(member2 => {
              if (member2.hasPermission("BAN_MEMBERS")) return;
              b.push(a);
              aut.push(a.author);
            });
          }
        });
        if (!b.includes(":warning: | Saldırgan botlar susturulacak.")) {
          işlem();
        } else {
        }

        function işlem() {
          if (b.length > 5) {
            message.channel.send(
              ":warning: | Saldırı yapan botlar susturulacak."
            );
            aut.forEach(a => {
              message.channel.overwritePermissions(a, {
                SEND_MESSAGES: false
              });
            });
            message.channel.send(
              client.emojiler.evet + " | Saldırı yapan botlar susturuldu."
            );
          } else return;
        }
      });
    });
  });
});
////////////////////////botkoruma
client.on("guildMemberAdd", async member => {
  if (db.has(`botkoruma_${member.guild.id}`) === false) return;
  if (member.user.bot === false) return;
  if (db.has(`botİzinli_${member.id}`) === true) return;

  member.kick(member, `Bot koruması aktif!`);

  member.guild.owner.send(
    `Sunucunuza bir bot eklendi ve sunucudan otomatik olarak atıldı, sunucuya eklenmesini onaylıyor iseniz \`!giriş-izni ${member.id}\``
  );
});
//////////////////botkoruma
client.on("message", async msg => {
  const db = require("quick.db");
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;

  if (msg.content.length > 7) {
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1);
  }

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 150) {
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1);
    if (msg.guild.id === "264445053596991498") return;
    msg.channel.send(
      `${client.emojis.get(client.emoji.levelup)}Tebrik ederim <@${
        msg.author.id
      }>! Seviye atladın ve **${db.fetch(
        `seviye_${msg.author.id + msg.guild.id}`
      )}** seviye oldun!`
    );
    db.delete(`puancik_${msg.author.id + msg.guild.id}`);
  }

  if (db.has(`roll_${msg.guild.id}`) === true) {
    if (db.has(`rollss_${msg.guild.id}`) === true) {
      var r = db.fetch(`roll_${msg.guild.id}`);
      var s = db.fetch(`rollss_${msg.guild.id}`);

      if (db.fetch(`seviye_${msg.author.id + msg.guild.id}`) == s) {
        if (msg.member.roles.has(msg.guild.roles.get(r).id) === false) {
          msg.channel.send(
            `<@${msg.author.id}> başarıyla **${db.fetch(
              `seviye_${msg.author.id + msg.guild.id}`
            ) - 1 || 0}** seviyeyi geçtin ve **${
              msg.guild.roles.get(r).name
            }** rolünü aldın!`
          );
          msg.member.addRole(msg.guild.roles.get(r).id);
        }
      }
    }
  }
});
////////////////////////seviye

client.on("guildMemberAdd", async member => {
  let tag = await db.fetch(`technotag_${member.guild.id}`);
  let tagsekil;
  if (tag == null) tagsekil = member.setNickname(`${member.user.username}`);
  else tagsekil = member.setNickname(`${tag} ${member.user.username}`);
});
//////////////ototag
client.on("guildMemberAdd", async member => {
  let log = await db.fetch(`otolog_${member.guild.id}`);
  let log2 = member.guild.channels.find("id", log);
  let rol = await db.fetch(`otorol_${member.guild.id}`);
  let otorol = member.guild.roles.find("id", rol);
  if (!log) return;
  if (!log2) return;
  if (!rol) return;
  if (!otorol) return;
  log2.send(
    `:mega: :5727_GreenTick: \`${member.user.tag}\` adlı kullanıcı aramıza katıldı! \`${otorol.name}\` adlı rol başarıyla verildi.`
  );
  member.addRole(otorol);
});
////////////////////otorol
//////
const invites = {};

const wait = require("util").promisify(setTimeout);

client.on("ready", () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on("guildMemberAdd", member => {
  let gkanal = db.fetch(`davetK_${member.guild.id}`);
  const kanala = member.guild.channels.get(gkanal);
  if (!kanala) return;

  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];

    invites[member.guild.id] = guildInvites;

    const invite = guildInvites.find(x => ei.get(x.code).uses < x.uses);

    const davetçi = client.users.get(invite.inviter.id);

    kanala.send(
      `${member.user.tag} **adlı kullanıcı sunucuya katıldı. Davet eden kullanıcı:** ${davetçi.tag} ( ${invite.uses} **adet daveti var**)`
    );
  });
});
//////////
/////

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

const { promisify } = require("util");

client.config = require("./config.js");
client.logger = console;
client.wait = promisify(setTimeout);
client.ayar = db;

String.prototype.toProperCase = function() {
  return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

process.on("uncaughtException", err => {
  const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
  console.error("Uncaught Exception: ", errorMsg);
  process.exit(1);
});

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: ", err);
});
//////////normal sunucu kur


client.on('message', async message => {
const ms = require('ms');
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let u = message.mentions.users.first() || message.author;
if (command === "normal-sunucu") {
if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
if (!message.member.hasPermission('ADMINISTRATOR'))
return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 10000,
errors: ['time'],
})


.then((collected) => {
message.guild.createChannel('📜│Bilgilendirme.', 'category', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])

client.on('guildMemberAdd', async member => {
let rol = await db.fetch(`otorol_${member.guild.id}`)
db.fetch(`otorolkanal_${member.guild.id}`).then(async i => {
const channel = member.guild.channels.get(i)
if (!i) return;
let guild = member.guild;
let otorol = guild.roles.find('name', `${rol}`);
member.addRole(otorol);
channel.send(`**${member.user.tag}** adlı kullanıcıya \`${rol}\` adlı rol verildi!`)
})
});


message.guild.createChannel('📌│кυяαllαя', 'text', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "📜│Bilgilendirme.")));
message.guild.createChannel('🍺│gıяıѕ-çıкıѕ', 'text', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "📜│Bilgilendirme.")));
message.guild.createChannel('💥│ѕαчαç', 'text', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "📜│Bilgilendirme.")));
message.guild.createChannel('📊│αикεт', 'text', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])
.then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "📜│Bilgilendirme.")));
message.guild.createChannel('📣│dυчυяυlαя', 'text', [{
id: message.guild.id,
deny: ['SEND_MESSAGES']
}])
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "📜│Bilgilendirme.")));

})
.then((collected) => {
message.guild.createChannel('⚡│Ana. Kanallar.', 'category', [{
id: message.guild.id,
}]);

message.guild.createChannel(`🌺│тαvsıyε`, 'text')
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "⚡│Ana. Kanallar.")));
message.guild.createChannel(`🌙│σzlu-ѕσzlεя`, 'text')
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "⚡│Ana. Kanallar.")));
message.guild.createChannel(`📷│fσтσğяαflαя`, 'text')
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "⚡│Ana. Kanallar.")));
message.guild.createChannel(`🤖│вσт-кσмυтlαяı`, 'text')
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "⚡│Ana. Kanallar.")));
message.guild.createChannel(`💭│gεиεl-ѕσнвεт`, 'text')
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "⚡│Ana. Kanallar.")));

message.guild.createChannel(`✯ │ŁØRÐ. &`, "voice")
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "🏆 │ Yetkili Katı")))
.then(c => {
let role = message.guild.roles.find("name", "@everyone");
let role2 = message.guild.roles.find("name", "⍫ Kurucu 🌹");

c.overwritePermissions(role, {
CONNECT: true,
});
c.overwritePermissions(role2, {
CONNECT: true,

});
})

message.guild.createChannel('🏆 │ Yetkili Katı', 'category', [{
id: message.guild.id,
}]);

message.guild.createChannel(`💮│Kâptân. &`, "voice")
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "🏆 │ Yetkili Katı")))
.then(c => {
let role = message.guild.roles.find("name", "@everyone");
let role2 = message.guild.roles.find("name", "⍫ Kurucu 🌹");
let role3 = message.guild.roles.find("name", "⍫ Yonetici 🌹");
c.overwritePermissions(role, {
CONNECT: true,
});
c.overwritePermissions(role2, {
CONNECT: true,
});
c.overwritePermissions(role3, {
CONNECT: true,
});
})

message.guild.createChannel(`⭐│Sohbet. †`, "voice")
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "🏆 │ Yetkili Katı")))
.then(c => {
let role = message.guild.roles.find("name", "@everyone");
c.overwritePermissions(role, {
CONNECT: true,
});
})

message.guild.createChannel(`⭐│Sohbet. ††`, "voice")
.then(channel =>
channel.setParent(message.guild.channels.find(channel => channel.name === "🏆 │ Yetkili Katı")))
.then(c => {
let role = message.guild.roles.find("name", "@everyone");
c.overwritePermissions(role, {
CONNECT: true,
});
})


message.guild.createRole({
name: '✯ │ŁØRÐ. &',
color: 'ff0000',
permissions: [
"ADMINISTRATOR",
]
})


message.guild.createRole({
name: '💮│Kâptân. &',
color: '49ff00',
permissions: [
"MANAGE_GUILD",
"MANAGE_ROLES",
"MUTE_MEMBERS",
"DEAFEN_MEMBERS",
"MANAGE_MESSAGES",
"MANAGE_NICKNAMES",
"KICK_MEMBERS"
]
})

message.guild.createRole({
name: '🍁│Yønetici. &',
color: 'ffb400',
permissions: [
"MANAGE_GUILD",
"MANAGE_ROLES",
"MUTE_MEMBERS",
"DEAFEN_MEMBERS",
"MANAGE_MESSAGES",
"MANAGE_NICKNAMES"
]
})

message.guild.createRole({
name: '💐│Łâdiεs. &',
color: 'd300ff',
})

message.guild.createRole({
name: '🏆│Bøys. &',
color: 'ffffff',
})

message.guild.createRole({
name: '🛡 │Authorizεd. Bot. &',
color: '0006ff',
})

message.channel.send("⍫ Gerekli Roller Ve Odalar Kuruldu 🌹")

})

}
});
///////////////satış sunucu
client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let rrrsembed = new Discord.RichEmbed()
  let u = message.mentions.users.first() || message.author;
  if (command === "satış-sunucusu") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Hizmet Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])    
 message.guild.createChannel('「📃」Discord-kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
         message.guild.createChannel('「📃」ödüller', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
         message.guild.createChannel('「📃」drop', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
                message.guild.createChannel('「📃」İnvite', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
 message.guild.createChannel('「🚪」gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
       message.guild.createChannel('「✅」sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」log-kanalı', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('「📢」Duyuru-Panosu', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」Güncellemeler', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('「💾」Hizmet-Alanlar', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('「📢」son-davet-takip"', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

       }) 
       .then((collected) => {
        message.guild.createChannel('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
       id: message.guild.id,
     }]);

     message.guild.createChannel(`「💬」genel-sohbet`, 'text')
       .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

     message.guild.createChannel(`「🤖」bot-komutları`, 'text')
       .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

      message.guild.createChannel(`「💡」şikayet-ve-öneri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
    });
})

message.guild.createChannel('|▬▬|HİZMET ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`🔖》Java Hizmetleri`, 'text')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|HİZMET ODALARI|▬▬|")))
 message.guild.createChannel(`🔖》Plugin Hizmetleri`, 'text')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|HİZMET ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》Discord Bot hizmetleri`, 'text')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|HİZMET ODALARI|▬▬|")))
 message.guild.createChannel(`🎮》banner hizmetleri`, 'text')
 .then(channel =>
  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|HİZMET ODALARI|▬▬|")))
  message.guild.createChannel(`🎮》skript hizmetleri`, 'text')
  .then(channel =>
   channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|HİZMET ODALARI|▬▬|")))
   message.guild.createChannel(`🎮》website hizmetleri`, 'text')
   .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|HİZMET ODALARI|▬▬|")))
    message.guild.createChannel(`🎮》ek hizmetleri`, 'text')
    .then(channel =>
     channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|HİZMET ODALARI|▬▬|")))
     message.guild.createChannel(`🎮》harita hizmetleri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|HİZMET ODALARI|▬▬|")))
      message.guild.createChannel(`🎮》tasarım hizmetleri`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|HİZMET ODALARI|▬▬|")))

message.guild.createChannel('|▬▬|YÖNETİCİ ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);
 
message.guild.createChannel(`👑》Yönetim`, 'text')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|YÖNETİCİ ODALARI|▬▬|")))
message.guild.createChannel(`👑》Yönetim`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|YÖNETİCİ ODALARI|▬▬|")))


message.guild.createChannel('|▬▬|OYUN ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}]);
message.guild.createChannel(`🎮》Sayı-saymaca`, 'text')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
message.guild.createChannel(`🎮》Kelime-Türet`, 'text')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
message.guild.createChannel(`🎮》Matematik Türet`, 'text')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
.then(channel =>
      
message.guild.createChannel('|▬▬|AFK ODALARI|▬▬|', 'category', [{
  id: message.guild.id,
}])); 
      
message.guild.createChannel(`💤》AFK`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|AFK ODALARI|▬▬|")))

      message.guild.createRole({
        name: '🌙 Kurucu 🌙',
        color: 'BLACK',
        permissions: [
            "ADMINISTRATOR",
    ]
      })

      
      message.guild.createRole({
        name: '🔰 Yönetici 🔰',
        color: 'BLUE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: '🔧 Moderator 🔧',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.createRole({
        name: '💎Vip💎Üye💎',
        color: '#fff700',
      })
        
      message.guild.createRole({
        name: '🎮 Youtuber 🎮',
        color: '#00f9ff',
      })

      message.guild.createRole({
        name: '✔ Özel Üye ✔',
        color: '#ff0000',
      })

      message.guild.createRole({
        name: '⛳ Üye ⛳',
        color: '#00f9ff',
      
      })
      message.guild.createRole({
        name: 'Bot',
        color: 'ORANGE',
        permissions: [
            "ADMINISTRATOR"
    ]
      })

       message.channel.send("**Bot** gerekli odaları kurdu! Bu kodu editliyen kişi: <@422505993998696459>")
     
            })   
   
}
});
//////
///////////

///////////

var prefix = ayarlar.prefix;


 

////////////////////////
app.get("/", (request, response) => {
  console.log("Ne ölmesi kardeşim bayılmışım");
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://mcsda-regis.glitch.me/`);//Glitch linkinizi doğru şekilde girin!
}, 280000)
///////////

client.on("message", async message => {
  if (message.content === "gir") {
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async message => {
  if (message.content === "çık") {
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);

/////////////////////////////////////
///////////////////////////////////////////////////

client.on("userUpdate", async (old, nev) => {
  let emingSunucu = ""; //Sunucu ID
  let emingKanal = ""; //BILGI KANAL ID
  let emingRol = ""; //ROL ID
  let emingTag = "Hz."; //TAG
  if (old.username !== nev.username) {
    if (
      nev.username.includes(emingTag) &&
      !client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .roles.has(emingRol)
    ) {
      client.channels
        .get(emingKanal)
        .send(
          `<:tik:670933175677091851> **${nev}, \`${emingTag}\` Tagını aldı ${emingRol} rolünü kazandı.**`
        );
      client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .addRole(emingRol);
    }
    if (
      !nev.username.includes(emingTag) &&
      client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .roles.has(emingRol)
    ) {
      client.guilds
        .get(emingSunucu)
        .members.get(nev.id)
        .removeRole(emingRol);
      client.channels
        .get(emingKanal)
        .send(
          `<:hayr:670933128835235841> **${nev}, \`${emingTag}\` Tagını çıkarttı ${emingRol} rolünü kaybetti.**`
        );
    }
  }
});

///////////////////////////////////////////////////

/////////////////////////////////////////////////////

client.on("guildMemberAdd", (member, message) => {
  if (member.guild.id !== "665499317447950336") return; //sunucu ıd
  let aylartoplam = {
    "01": "Ocak",
    "02": "Şubat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"
  };
  let aylar = aylartoplam;
  let user = client.users.get(member.id);
  require("moment-duration-format");
  let eskiNick = member.user.username;
  const id = ""; //kanal ıd
  const channel = member.guild.channels.get(id);
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  var kontrol;
  if (gün < 7) kontrol = "Güvenilir Değil!";
  if (gün > 7) kontrol = "Güvenilir Gözüküyor!";
  channel.send(
    `<a:tac4:670934198487351296> Hoşgeldin ${member} seninle ${
      member.guild.members.size
    } kişiyiz! <a:tac4:670934198487351296> \n\n <a:yesil:671649968561324045> Kaydının yapılması için sesli odaya gelip ses vermen gerekli. <a:yesil:671649968561324045>\n\n <a:hypesquad:670933700405362698> Hesap Kuruluş Zamanı: ${moment(
      user.createdAt
    ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
      user.createdAt
    ).format(
      "YYYY HH:mm:ss"
    )} <a:hypesquad:670933700405362698> \n\n Bu Kullanıcı: **${kontrol}**\n\n <@&671434803681427495> Rolündeki yetkililer seninle ilgilenecektir.`
  );
});

//////////////////////////////////////////////////////


/////
client.login(ayarlar.token);
