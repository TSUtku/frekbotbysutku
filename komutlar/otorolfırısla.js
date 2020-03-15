const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";

  let rol = await db.fetch(`rolk_${message.guild.id}`);
  let kanal = await db.fetch(`rolk_${message.guild.id}`);
  if (!kanal) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Otorol Sistemi  zaten ayarlanmamış!`);
    message.channel.send(embed);
    return;
  }
    if (!rol) {
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Otorol Sistemi zaten ayarlanmamış!`);
    message.channel.send(embed);
    return;
  }
  db.delete(`rolk_${message.guild.id}`);
  db.delete(`rolk_${message.guild.id}`);
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setFooter(client.user.username, client.user.avatarURL)
    .setDescription(`Otorol sistemi sıfırlandı!`);
  message.channel.send(embed);
  return;
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["otorolsıfırla"],
  permLevel: 3
};

exports.help = {
  name: "otorol-sıfırla",
  description: "kanal-koruma-sıfırla",
  usage: "kanal-koruma-sıfırla"
};