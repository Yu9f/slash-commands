const { EmbedBuilder, } = require("discord.js");

module.exports = {
	name: "ping",
	description: "Get bot speed",
	timeout: 5000,
	run: async (client, message) => {
		const msg = await message.channel.send("Pong!");
		const embed = new EmbedBuilder()
			.setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
			.setColor("GREEN")
			.setTimestamp()
			.setDescription(
				`**Time:** ${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms\n**API Ping:** ${
					client.ws.ping
				} ms`,
			);
		msg.edit({ embeds: [embed], content: `<@${message.author.id}>` });
	},
};
