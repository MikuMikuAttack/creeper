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

client.on('message', message => {
    if (message.content === 'heads up') {
    	message.reply('you hear a sound');
  	}
});

client.on('message', message => {
    if (message.content === 'turn around and look up') {
    	message.reply('total shock fills your body');
  	}
});

client.on('message', message => {
    if (message.content === 'oh no its you again') {
    	message.reply('i can never forget those eyes eyes eyes');
  	}
});

client.on('message', message => {
    if (message.content === 'eyes eyes eyes') {
    	message.reply('cuz baby tonight');
  	}
});

client.on('message', message => {
    if (message.content === 'the creepers trying to steal all our stuff again') {
    	message.reply('sorry but thou shalt not continue');
  	}
});

client.on('message', message => {
    if (message.content === 'the creepers trying to steal our stuff again') {
    	message.reply('sorry but thou shalt not continue');
  	}
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('hi!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
