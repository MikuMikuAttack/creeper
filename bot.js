const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'creeper') {
    	message.channel.send('aw man');
  	}
});

client.on('message', message => {
    if (message.content === 'so we back in the mine') {
    	message.channel.send('got our pickaxe swinging from side to side');
  	}
});

client.on('message', message => {
    if (message.content === 'side side to side') {
    	message.channel.send('this task a grueling one');
  	}
});

client.on('message', message => {
    if (message.content === 'hope to find some diamonds tonight night night') {
    	message.channel.send('diamonds tonight');
  	}
});

client.on('message', message => {
    if (message.content === 'heads up') {
    	message.channel.send('you hear a sound');
  	}
});

client.on('message', message => {
    if (message.content === 'turn around and look up') {
    	message.channel.send('total shock fills your body');
  	}
});

client.on('message', message => {
    if (message.content === 'oh no its you again') {
    	message.channel.send('i can never forget those eyes eyes eyes');
  	}
});

client.on('message', message => {
    if (message.content === 'eyes eyes eyes') {
    	message.channel.send('cuz baby tonight');
  	}
});

client.on('message', message => {
    if (message.content === 'the creepers trying to steal all our stuff again') {
    	message.channel.send('sorry but thou shalt not continue');
  	}
});

client.on('message', message => {
    if (message.content === 'the creepers trying to steal our stuff again') {
    	message.channel.send('sorry but thou shalt not continue');
  	}
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.channel.send('hi!');
  	}
});

client.on('message', message => {
    if (message.content === 'c!ask does tus love ganny?') {
    	message.channel.send('i would say 50% yes and 50% no');
  	}
});

client.on('message', message => {
    if (message.content === 'c!help') {
    	message.channel.send('no')
                            ('a');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot 
