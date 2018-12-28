const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '1';

client.on('message', message => {
    if(message.content === 'حيدر'){
        message.channel.send('يوسف')
    }
});

client.on('message', message => {
    if(message.content === 'يوسف'){
        message.channel.send('الو')
    }
});



client.on('message', message => {
    if(message.content === 'الو'){
        message.channel.send('هلا')
    }
});



client.on('message', message => {
    if(message.content === 'هلا'){
        message.channel.send('كيفك')
    }
});




client.on('message', message => {
    if(message.content === 'كيفك'){
        message.channel.send('تمام')
    }
});








client.on('message', message => {
    if(message.content === 'تمام'){
        message.channel.send('#daily')
    }
});








client.on('message', message => {
    if(message.content === '#daily'){
        message.channel.send('حيدر')
    }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });














client.login(process.env.BOT_TOKEN);
