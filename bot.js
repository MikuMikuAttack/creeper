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

client.on('message', message => {
    if (message.content === 'so we back in the mine') {
    	message.reply('got our pickaxe swinging from side to side');
  	}
});

client.on('message', message => {
    if (message.content === 'side side to side') {
    	message.reply('this task a grueling one');
  	}
});

client.on('message', message => {
    if (message.content === 'hope to find some diamonds tonight night night') {
    	message.reply('diamonds tonight');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
