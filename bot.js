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
client.login(process.env.NjA2MDg0NTE1NzQ3NTk0Mjcx.XUO2TA.gwQmS4aE2fGXE1dMUo5uVpP2Fzk);//where BOT_TOKEN is the token of our bot 
