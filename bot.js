const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527850226422251523")
setInterval(function() {
channel.send(`abulrahman_gamer`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
