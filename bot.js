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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
