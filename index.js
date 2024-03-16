const { Client, Collection, } = require("discord.js");
const config = require("./config.json");

const client = new Client({ intents: [
	'Guilds',
	'MessageContent',
	'GuildMembers',
	'GuildInvites',
	'GuildBans',
	'GuildEmojisAndStickers',
	'GuildVoiceStates'
]});

require('discord-logs')(client);
require('colors');

client.commands = new Collection();
client.slash = new Collection();

["handlers", "events", "slash"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

process.on('unhandledRejection', (error) => {
	console.error(error);
})
  
client.login(config.TOKEN);
