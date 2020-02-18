const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const antispam = require('discord-anti-spam'); // MODÜL
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');



var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
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
//////////////

const app = express();
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://mcsda.glitch.me/`);
    }, 280000);
/////////////////////
client.on('message', async msg => {
    if (msg.content.toLowerCase() === prefix + "disko") {
msg.channel.send('**Eğer *__disko__* Adlı Bir Rol Oluşturduysanız Şu Andan İtibaren O Rolün Rengi Sürekli Değişecektir! Eğer *__disko__* Rolü Oluşturulmadıysa Hiçbir Rolün Rengi Değişmeyecektir.**');
   if (msg.channel.type === "dm") return;
  const rol = 'disko' // Rol ismi buraya yazılacak. Örnek Olarak Buraya Kurucu Yazarsak Kurucu Rolünün Rengi Sürekli Değişir //
  setInterval(() => {
      msg.guild.roles.find(s => s.name === rol).setColor("RANDOM")
      }, 1000);
  } 
});//discord api ihlali olabilir
   /////////////////////////////


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
    if(message.content.startsWith(ayarlar.prefix+"afk")) return; 
 if (message.author.bot === true) return;
   

     if(message.content.includes(`<@${afk_kullanici.id}>`))
         if(db.has(`afks_${afk_kullanici.id}`)) {
             const afksuan = new Discord.RichEmbed()
                     .setColor("RANDOM")
                     .setDescription(`**${client.users.get(afk_kullanici.id).tag}** adlı kullanıcı şuanda AFK! \n**Sebep:** \n${db.fetch(`afks_${afk_kullanici.id}`)}`)
                     message.channel.send(afksuan)
         }
   
         if(db.has(`afks_${message.author.id}`)) {
                        let user = message.member

             const basarili = new Discord.RichEmbed()

                 .setColor("GREEN")
                 .setDescription("<@"+`${message.author.id}`+">"+"**Başarıyla AFK modundan çıktın <:tik:561940914247827470>**")
                              user.setNickname(message.author.username)

                message.channel.send(basarili)
             db.delete(`afks_${message.author.id}`)
         } 

       });
   
///////////////
client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let timeout = 600000
let dakdest = await db.fetch(`goldzzz_${msg.author.id}`);
let i = db.fetch(`gold_${msg.author.id}`)
          if (i == 'gold') {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
    } else {
  if(msg.author.bot) return;   
  if (msg.content.length > 1) {
db.set(`goldzzz_${msg.author.id}`, Date.now());
   msg.channel.send('**Bir Gold Üye Belirdi!!**')
  }
};
          }
   else if (i == undefined) {           
          }
          if (!i) return;
        
});
   
/////////////////////

client.on("message", async message => {
    let sayac = db.fetch(`sayac_${message.guild.id}`)
    let sayack = db.fetch(`sayackanal_${message.guild.id}`)
    if (!sayack) return;
    let sayackanal = message.guild.channels.find('name', sayack)
        if(sayac <= message.guild.members.size) {
    sayackanal.send(`:tada: Tebrikler \`${message.guild.name}!\` ${sayac} kullanıcıya başarıyla ulaştık! Sayaç başarıyla sıfırlandı.`)
            db.delete(`sayac_${message.guild.id}`)
            db.delete(`sayackanal_${message.guild.id}`)
            }
});



 










////////////////////////////////////////////////////

const { GOOGLE_API_KEY } = require('./ayarlar.json');
const youtube = new YouTube(GOOGLE_API_KEY);

client.on('message', async msg => {

    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;

    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
    let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(prefix.length)

    if (command === 'play') {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
    .setDescription(':warning: | İlk olarak sesli bir kanala giriş yapmanız gerek.'));
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(':warning: | İlk olarak sesli bir kanala giriş yapmanız gerek.'));
        }
        if (!permissions.has('SPEAK')) {
             return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(':warning: | Şarkı başlatılamıyor. Lütfen mikrofonumu açınız.'));
        }

        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
        for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
             return msg.channel.sendEmbed(new Discord.RichEmbed)
      .setTitle(`**✅ | Oynatma Listesi: **${playlist.title}** Kuyruğa Eklendi!**`)
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
       
                 msg.channel.sendEmbed(new Discord.RichEmbed()              
         .setTitle('S-GÜVENLİK | Şarkı Seçimi')
         .setAuthor(`${msg.author.tag}`, msg.author.avatarURL)
         .setThumbnail("https://i.postimg.cc/W1b1LW13/youtube-kids-new-logo.png")
         .setDescription(`${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}`)
         .setFooter('Lütfen 1-10 arasında bir rakam seçiniz 10 saniye içinde liste iptal edilecektir.')
         .setColor('RED'));
          msg.delete(5000)
     
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                         return msg.channel.sendEmbed(new Discord.RichEmbed()
            .setColor('RED')
            .setDescription(':warning: | **Şarkı Değeri Belirtmediğiniz İçin Seçim İptal Edilmiştir**.'));
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.sendEmbed(new Discord.RichEmbed()
          .setColor('RED')
          .setDescription(':( | **Aradım Fakat Hiç Bir Sonuç Çıkmadı**'));
                }
            }
            return handleVideo(video, msg, voiceChannel);
   
        }
    } else if (command === 'skip') {
        if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('<a:frograinbow:488978511474982933> | **Lütfen öncelikle sesli bir kanala katılınız**.'));
        if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle('<a:frograinbow:488978511474982933> | **Hiç Bir Müzik Çalmamakta**'));                                          
        serverQueue.connection.dispatcher.end('**Müziği Geçtim!**');
        return undefined;
    } else if (command === 'stop') {
        if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('**:warning: | Lütfen öncelikle sesli bir kanala katılınız.**'));
        if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle(':warning: **| Hiç Bir Müzik Çalmamakta**'));                                          
        msg.channel.send(`:stop_button: **${serverQueue.songs[0].title}** Adlı Müzik Durduruldu`);
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('**Müzik Bitti**');
        return undefined;
    } else if (command === 'volume') {
        if (!msg.member.voiceChannel) if (!msg.member.voiceChannel) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(':warning: **| Lütfen öncelikle sesli bir kanala katılınız.**'));
        if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
     .setColor('RANDOM')
     .setTitle(':warning:| **Hiç Bir Müzik Çalmamakta**'));                                          
        if (!args[1]) return msg.channel.sendEmbed(new Discord.RichEmbed()
   .setTitle(`:warning: Şuanki Ses Seviyesi: **${serverQueue.volume}**`)
    .setColor('RANDOM'))
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
        return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(`:hammer:  Ses Seviyesi Ayarlanıyor: **${args[1]}**`)
    .setColor('RANDOM'));                          
    } else if (command === 'np') {
        if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(":warning: | **Çalan Müzik Bulunmamakta**")
    .setColor('RANDOM'));
        return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Molly Malone's | Çalan Şarkı")                        
    .addField('Başlık', `[${serverQueue.songs[0].title}](${serverQueue.songs[0].url})`, true)
    .addField("Süre", `${serverQueue.songs[0].durationm}:${serverQueue.songs[0].durations}`, true))
    } else if (command === 'queue') {
    let index = 0;
        if (!serverQueue) return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(":warning: | **Sırada Müzik Bulunmamakta**")
    .setColor('RANDOM'));
          return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
     .setTitle("Molly Malone's | Şarkı Kuyruğu")
    .setDescription(`${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}`))
    .addField('Şu anda çalınan: ' + `${serverQueue.songs[0].title}`);
    } else if (command === 'pause') {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle("**:pause_button: Müzik Senin İçin Durduruldu!**")
      .setColor('RANDOM'));
        }
        return msg.channel.send(':warning: | **Çalan Müzik Bulunmamakta**');
    } else if (command === 'unpause') {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle("**:arrow_forward: Müzik Senin İçin Devam Etmekte!**")
      .setColor('RANDOM'));
        }
        return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(":warning: ** | Çalan Müzik Bulunmamakta.**")
    .setColor('RANDOM'));
    }


    return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
    const song = {
        id: video.id,
        title: video.title,
        url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
        durations: video.duration.seconds,
    views: video.views,
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`:warning: **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`);
            queue.delete(msg.guild.id);
            return msg.channel.sendEmbed(new Discord.RichEmbed()
      .setTitle(`:warning: **Şarkı Sisteminde Problem Var Hata Nedeni: ${error}**`)
      .setColor('RANDOM'))
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        return msg.channel.sendEmbed(new Discord.RichEmbed()
    .setTitle(`:arrow_heading_up:  **${song.title}** Adlı Müzik Kuyruğa Eklendi!`)
    .setColor('RANDOM'))
    }
    return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === ' :x:  | **Yayın Akış Hızı Yeterli Değil.**') console.log('Müzik Bitti.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

     serverQueue.textChannel.sendEmbed(new Discord.RichEmbed()                                
  .setTitle("**Molly Malone's |  Müzik Başladı**",`https://cdn.discordapp.com/avatars/473974675194511361/6bb90de9efe9fb80081b185266bb94a6.png?size=2048`)
  .addField('\nBaşlık', `[${song.title}](${song.url})`, true)
  .addField("\nSes Seviyesi", `${serverQueue.volume}%`, true)
  .addField("Süre", `${song.durationm}:${song.durations}`, true)
  .setImage(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .setColor('RANDOM'));
}
/////////////////////////////////////////////////////////

client.on('ready', () => {
  // Module Configuration Constructor
   antispam(client, {
        warnBuffer: 3, 
        maxBuffer: 5,
        interval: 2000, 
        warningMessage: "lütfen spamı durdurun!", // İleti kullanıcıları uyarıldığında alır. (mesaj '@ Kullanıcı' ile başlar, bu yüzden sadece devam etmek için giriş yapmanız gerekir..) 
        banMessage: "spam nedeniyle yasaklanmış çekiç tarafından vuruldu!", // MKullanıcı yasaklandığında yazılı mesaj gönderilir. (mesaj '@ Kullanıcı' ile başlar, bu yüzden sadece devam etmek için giriş yapmanız gerekir..) 
        maxDuplicatesWarning: 7,// Bir kullanıcının uyarılmadan önce bir zaman aralığında gönderebileceği maksimum yinelenen mesaj sayısı.
        maxDuplicatesBan: 10, 
        deleteMessagesAfterBanForPastDays: 7, 
        exemptRoles: ["Kurucu"], 
        exemptUsers: [""] 
      });
      
  // Rest of your code
});
 


///////////////////////////////////////////////////////////

client.on('guildMemberAdd', async (member, guild, message) => {
//CodAre
let role = await  db.fetch(`otorolisim_${member.guild.id}`)
 let otorol = await db.fetch(`autoRole_${member.guild.id}`)
 let i = await db.fetch(`otorolKanal_${member.guild.id}`)
 if (!otorol || otorol.toLowerCase() === 'yok') return;
else {
 try {
  //CodAre

  if (!i) return //CodAre

  member.addRole(member.guild.roles.get(otorol))
                        var embed = new Discord.RichEmbed()
                        .setDescription(`**Sunucuya Yeni Katılan** \`${member.user.tag}\` **Kullanıcısına** \`${role}\` **Rolü verildi.**`)
                        .setColor('0x36393E') //CodAre
                        .setFooter(`Otorol Sistemi`)
     member.guild.channels.get(i).send(embed)  } catch (e) {
 console.log(e)
}
}

});

///////////////////////////////////////////////////////////

client.on("message", async message => {

if( message.content === "sa" || message.content === "Sa" || message.content === "Selamın Aleyküm" || message.content === "selamın aleyküm" || message.content === "sea" || message.content === "Sea") {

let gold = require("quick.db").fetch(`tios_gold${message.author.id}`)
if (gold === "gold") {

  const embed = new Discord.RichEmbed()
  .setColor("GOLD")
  .setDescription(" Hizaya Geçin Bu Bir **Gold** Üye ! ")
  message.channel.send({embed})

  } else {

return;

  }
}
})

//////////////////////////////////////////////////////////

client.on('guildMemberAdd', member => {
 let guvenlik= db.fetch(`bottemizle_${member.guild.id}`)
    if (!guvenlik) return;
    if(member.user.bot !==true){
    } else {
   member.kick(member) 
  }  
  });

//////////////////////////////////////////////////////////

client.on('message', async message => {
  let ke = await db.fetch(`reklam_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let reklam = ["discord.gg/", "https://", ".org", ".com", ".cf", ".tk", ".xyz"]
    if (reklam.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Kurucuya gönderdim!!! Bir daha reklam yapma!")
        message.guild.owner.send("Sunucunuzda bir kişi reklam yaptı. \nKullanıcı: "+ message.author.tag +" \nMesaj: **"+ message +"** ")
      }
    }
    
  }
})


/////////////////////////////////////////////////////////

client.on("message", async msg => {


  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'selam' || msg.content.toLowerCase() == 'sa' || 
msg.content.toLowerCase() == 'Selam Naber') {
          try {

                  return msg.reply('Aleyküm Selam')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
    
    }
    if (!i) return;

    });

////////////////////////////////////////////////////////

client.on("message", msg => {
  let küfürEngel = db.fetch(`ke_${msg.guild.id}`)
  if (!msg.guild) return
  if (küfürEngel === 'kapali') return
    if (küfürEngel === 'acik') {
      const küfür = ["mk", "amk", "aq", "orospu", "oruspu", "oç", "sikerim", "yarrak", "piç", "amq", "sik", "amcık", "çocu", "sex", "seks", "amına", "orospu çocuğu", "sg", "siktir git"];
  if (küfür.some(word => msg.content.toLowerCase().includes(word)) ) {
    if (!msg.member.hasPermission("ADMINISTRATOR")) {
      msg.delete()
       msg.channel.send(new Discord.RichEmbed().setColor('#000000').setDescription('Olm utanmıyon mu yaşına başına bakmadan küfür etmeye he?! Püü senin sıfatına!')).then(message => message.delete(3000));
    }
}
    }
})
////////////////////////////////////////////////////////////
client.on('message', async (msg, member, guild) => {
  let DB = require('quick.db')
  let OtoCevap = await  DB.fetch(`otocevap_${msg.guild.id}`)
  if(OtoCevap === 'açık') {
    
    const OtoCevapSelam = new Discord.RichEmbed()
      .setColor('#000096')
      .setDescription(`**Aleyküm Selam, Hoşgeldin ${msg.author.username}!**`)
    
    if (msg.content.toLowerCase() === 'sa') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'slm') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'selam') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'sea') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'selamun aleyküm') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'selamın aleyküm') { 
      msg.channel.send(OtoCevapSelam).then(msg => msg.delete(3000))
    }

    
    const OtoCevapHalhatır = new Discord.RichEmbed()
      .setColor('#000096')
      .setDescription(`**İyiyiz, sen nasılsın ${msg.author.username}?**`)
    
    if (msg.content.toLowerCase() === 'naber') {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'nbr') {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'nasılsınız') {
      msg.channel.send(OtoCevapHalhatır).then(msg => msg.delete(3000))
    }

    
    const OtoCevapVeda = new Discord.RichEmbed()
      .setColor('#000096')
      .setDescription(`**Hoşçakal ${msg.author.username}!**`)
    
    if (msg.content.toLowerCase() === 'görüşürüz') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bb') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bye') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bye bye') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bay') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'bay bay') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'baybay') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    if (msg.content.toLowerCase() === 'güle güle') {
      msg.channel.send(OtoCevapVeda).then(msg => msg.delete(3000))
    }
    
    if (msg.content.toLowerCase() === `<@${client.user.id}>`) { //Botu etiketleyince mesaj atar
      msg.channel.send('Ha efendim knk')
    }
  
    if (msg.content.toLowerCase() === 'yok bişi') {
      msg.channel.send('LA SEN BENİMLE DALGA MI GEÇİYON')
    }
  }
})

//////////////////reklamisimban
client.on('guildMemberAdd', async member => {
  const reklamisim = ["discord.gg/", "https://discord.gg", "invite", "join", "twitch", "instagram", "facebook", "dlive", "nolive", "discordbots.org", "discordapp"]; 
  let reklamisimban = await db.fetch(`reklamisimban_${member.guild.id}`) 
  if (reklamisimban === 'kapali') return; 
  if (reklamisimban === 'acik') { 
   if (reklamisim.some(word => member.user.username.includes(word)) ) { 
      member.ban({ 
          reason: `isminde reklam olduğundan dolayı banlandı.`, 
        }) 
    } 
  } 

});
/////////////////////////linkengelle
client.on("message", async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
        
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`)  
          if (i == 'acik') {
              const reklam = ["discord.app", "discord.gg", "invite","discordapp","discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                    
                    let embed = new Discord.RichEmbed()
                    .setColor(0xffa300)
                    .setFooter('Gnarge Blocker s  Reklam engellendi.', client.user.avatarURL)
                    .setAuthor(msg.guild.owner.user.username, msg.guild.owner.user.avatarURL)
                    .setDescription("Gnarge Reklam sistemi, " + `***${msg.guild.name}***` + " adlı sunucunuzda reklam yakaladım.")
                    .addField('Reklamı yapan kişi', 'Kullanıcı: '+ msg.author.tag +'\nID: '+ msg.author.id, true)
                    .addField('Engellenen mesaj', msg.content, true)
                    .setTimestamp()                   
                    msg.guild.owner.user.send(embed)                       
                    return msg.channel.send(`${msg.author.tag}, Reklam Yapmak Yasak Dostum!`).then(msg => msg.delete(25000));
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
          });    
//////////////////////////////////////////////reklamkivk
client.on("message", async message => {
    let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member;
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                db.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                if (uyarisayisi === null) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)                
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete();
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacakç`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 3) {
                    message.delete();
                    await kullanici.ban({
                        reason: `Reklam ban sistemi`,
                    })
                    db.delete(`reklamuyari_${message.author.id}`)
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }

            }
        }
    }
});
////////////////////////////////
client.on("message", async msg => {
const db = require('quick.db');   
    let i = db.fetch(`otobsilicia_${msg.channel.id+msg.guild.id}`)
      if (i == undefined) {           
          }
        if (i == 'acik') {   
              let kanal = db.fetch(`otobsilici_${msg.channel.id+msg.guild.id}`)

          if (msg.channel.id != kanal.id) {
  if (msg.content.length > 0) {

    if(msg.author.bot === true){
      msg.delete(3000)
    }
  }
          }
        }
       
  
  })
//////////////////////////otobotsilici
client.on("guildMemberAdd", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
     let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {
            const bg = await Jimp.read("https://cdn.discordapp.com/attachments/577242119261913090/594920692303265822/hosgeldin.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length <10) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else if (member.user.tag.length > 0) font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 300, 300, member.user.tag);
            await userimg.resize(187, 169);////boyut
            await bg.composite(userimg, 317, 15).write("./img/"+ member.id + ".png");///sağa sola, yukarı aşşa
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })

client.on('message', async message => {
    if (message.content === 'fake') {
        client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});



/////////////bb-kanal
client.on("guildMemberRemove", async member => {
   const fs = require('fs');
    let gkanal = JSON.parse(fs.readFileSync("./ayarlar/glog1.json", "utf8"));
    const gözelkanal = member.guild.channels.get(gkanal[member.guild.id].resim)
    if (!gözelkanal) return;
        let username = member.user.username;
        if (gözelkanal === undefined || gözelkanal === null) return;
        if (gözelkanal.type === "text") {            
                        const bg = await Jimp.read("https://cdn.discordapp.com/attachments/594583488787644447/595138392216436746/gorusuruz.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
             if (member.user.tag.length <10) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else if (member.user.tag.length > 0) font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 300, 300, member.user.tag);
            await userimg.resize(189, 173);////boyut
            await bg.composite(userimg, 317, 15).write("./img/"+ member.id + ".png");///sağa sola, yukarı aşşa
              setTimeout(function () {
                    gözelkanal.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        }
    })





//////////////////////////
client.on('guildMemberAdd',async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png')
    const resim2 = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment.duration(kurulus).format("D")   
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1

       const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png');
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   
       const attachment = new Discord.Attachment(canvas.toBuffer(), 'STARKs-güvenlik.png');
    chan.send(attachment)
});
////////////////////güvenlik
client.on("message", async msg => {
const request = require('node-superfetch');
const db = require('quick.db');
const ms = require('parse-ms')
let zaman= db.fetch(`${msg.guild.id}.slowmode`) 
if (zaman === undefined) zaman = 0;
let timeout = zaman
let dakdest = await db.fetch(`slowmodee_${msg.author.id}`);

    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
        let time = ms(timeout - (Date.now() - dakdest));
      msg.delete()
      msg.channel.send('**Bu kanalda yavaş mod açık mesaj atmadan beklemen gerek!**').then(message => message.delete(2000));

    } else {
          if (!msg.member.hasPermission("MANAGE_MESSAGES")) {

  if (msg.content.length > 0) {
    db.set(`slowmodee_${msg.author.id}`,Date.now())
  }
    }
};       
});
////////////////////////slowmode
client.on('message', message => {
var antiraid = db.fetch(`sunucular.${message.guild.id}.spamkoruma`)
if(!antiraid) return;
if(message.author.bot) return;
message.guild.fetchMember(message.author).then(member => {
if(member.hasPermission('BAN_MEMBERS')) return;
var b = []
var aut = []
setTimeout(() => {
message.channel.fetchMessages({ limit: 10 }).then(m => {
m.forEach(a => {
if(m.filter(v => v.content === a.content).size > m.size / 2) {
message.guild.fetchMember(m.author).then(member2 => {
if(member2.hasPermission('BAN_MEMBERS')) return;
b.push(a)
aut.push(a.author)
})}})
if(!b.includes(":warning: | Saldırgan botlar susturulacak.")) { işlem() }
else {}
  
function işlem() {

if(b.length > 5) {
  message.channel.send(':warning: | Saldırı yapan botlar susturulacak.')
  aut.forEach(a => {
    message.channel.overwritePermissions(a, {
      "SEND_MESSAGES": false
    })
  })
  message.channel.send(client.emojiler.evet + ' | Saldırı yapan botlar susturuldu.')
} else return;
}
})})})})
////////////////////////botkoruma
client.on("guildMemberAdd", async member => {
if (db.has(`botkoruma_${member.guild.id}`) === false) return;
if (member.user.bot === false) return;
if (db.has(`botİzinli_${member.id}`) === true) return;

member.kick(member, `Bot koruması aktif!`)

member.guild.owner.send(`Sunucunuza bir bot eklendi ve sunucudan otomatik olarak atıldı, sunucuya eklenmesini onaylıyor iseniz \`!giriş-izni ${member.id}\``)
})
//////////////////botkoruma
client.on("message", async msg => {
  const db = require('quick.db');
  if (msg.channel.type === "dm") return;
  if(msg.author.bot) return;  
  
  if (msg.content.length > 7) {
    
    db.add(`puancik_${msg.author.id + msg.guild.id}`, 1)
};

  if (db.fetch(`puancik_${msg.author.id + msg.guild.id}`) > 150) {
    
    db.add(`seviye_${msg.author.id + msg.guild.id}`, 1)
    if (msg.guild.id === "264445053596991498") return;
    msg.channel.send(`${client.emojis.get(client.emoji.levelup)}Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`)}** seviye oldun!`)
    db.delete(`puancik_${msg.author.id + msg.guild.id}`)};
 
  if (db.has(`roll_${msg.guild.id}`) === true) {
  if (db.has(`rollss_${msg.guild.id}`) === true) {
    
 var r = db.fetch(`roll_${msg.guild.id}`)
 var s = db.fetch(`rollss_${msg.guild.id}`)
  
  if (db.fetch(`seviye_${msg.author.id + msg.guild.id}`) == s) {
    if (msg.member.roles.has(msg.guild.roles.get(r).id) === false) {
    msg.channel.send(`<@${msg.author.id}> başarıyla **${db.fetch(`seviye_${msg.author.id + msg.guild.id}`) - 1 || 0}** seviyeyi geçtin ve **${msg.guild.roles.get(r).name}** rolünü aldın!`)
    msg.member.addRole(msg.guild.roles.get(r).id)
    }
  };
}};
});
////////////////////////seviye

client.on('guildMemberAdd', async member => {
  
  let tag = await db.fetch(`technotag_${member.guild.id}`);
  let tagsekil;
  if (tag == null) tagsekil = member.setNickname(`${member.user.username}`)
  else tagsekil = member.setNickname(`${tag} ${member.user.username}`)
});
//////////////ototag
client.on("guildMemberAdd", async member => {
  let log = await db.fetch(`otolog_${member.guild.id}`);
  let log2 = member.guild.channels.find('id', log)
  let rol = await db.fetch(`otorol_${member.guild.id}`);
  let otorol = member.guild.roles.find('id', rol);
  if (!log) return;
  if (!log2) return;
  if (!rol) return;
  if (!otorol) return;
  log2.send(`:mega: :5727_GreenTick: \`${member.user.tag}\` adlı kullanıcı aramıza katıldı! \`${otorol.name}\` adlı rol başarıyla verildi.`)
  member.addRole(otorol)
});
////////////////////otorol
const invites = {};


const wait = require('util').promisify(setTimeout);

client.on('ready', () => {

  wait(1000);


  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
  
    let gkanal = db.fetch(`davetK_${member.guild.id}`)
    const kanala = member.guild.channels.get(gkanal)
    if (!kanala) return;

 
  member.guild.fetchInvites().then(guildInvites => {
    
    const ei = invites[member.guild.id];
  
    invites[member.guild.id] = guildInvites;
 
    const invite = guildInvites.find(x => ei.get(x.code).uses < x.uses);

    const davetçi = client.users.get(invite.inviter.id);
 
 
  kanala.send(`${member.user.tag} **adlı kullanıcı sunucuya katıldı. Davet eden kullanıcı:** ${davetçi.tag} ( ${invite.uses} **adet daveti var**)`)
  
  })
});
//////////////////////davettakip


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

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

const { promisify } = require('util')

client.config = require("./config.js")
client.logger = console
client.wait = promisify(setTimeout)
client.ayar = db

String.prototype.toProperCase = function() {
  return this.replace(/([^\W_]+[^\s-]*) */g, function(txt) {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

Array.prototype.random = function() {
  return this[Math.floor(Math.random() * this.length)];
};

process.on("uncaughtException", (err) => {
  const errorMsg = err.stack.replace(new RegExp(`${__dirname}/`, "g"), "./");
  console.error("Uncaught Exception: ", errorMsg);
  process.exit(1);
});

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: ", err);
});

client.login(ayarlar.token);
/////////////////

//////////////
