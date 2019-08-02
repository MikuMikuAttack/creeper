const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'creeper') {
    	message.reply('aw man');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NjA2MDg0NTE1NzQ3NTk0Mjcx.XUO7bw.isnSsbWDaI9-w-Pjc3E-th_BpT8);//where BOT_TOKEN is the token of our bot 
