const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  console.log(`BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("oline");
  client.user.setGame(`web https://kc-at-web.glitch.me/ 🔥 !güvenlikseviyesi🔥!gold 🔥 !yardım 🔥 BETA  0.9.3 `);
  console.log(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};

