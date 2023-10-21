const { Routes, REST } = require('discord.js');
const { readdirSync } = require('fs');
const config = require("./config.json");
const path = require('path');
require('colors');

// setup slash commands

const commands = []
readdirSync("./slash/").map(async dir => {
	readdirSync(`./slash/${dir}/`).map(async (cmd) => {
	commands.push(require(path.join(__dirname, `./slash/${dir}/${cmd}`)))
    })
})
const rest = new REST({ version: "10" }).setToken(config.TOKEN);

(async () => {
	try {
		console.log('[Discord API] Started refreshing application (/) commands.'.yellow);
		await rest.put(
			// if you want to make your slash commands in all guilds use "applicationCommands("CLIENT_ID")"
			Routes.applicationGuildCommands(config.CLIENTID, config.GUILID),
			{ body: commands },
		);
		console.log('[Discord API] Successfully reloaded application (/) commands.'.green);
	} catch (error) {
		console.error(error);
	}
})();
