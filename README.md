# slash-command by @fnr.

## slash commands handler to make your bot support slash commands features.

---
### Note: Node.js 16.6.0 or newer is required.
---

## Installation

```sh
npm install
```

---
### Make sure to check [Slash Commands Guide](https://discordjs.guide/interactions/slash-commands.html#registering-slash-commands)
---

- config.json
```js
{
    "TOKEN": "YOUR_BOT_TOKEN",
    "GUILDID": "YOUR_SERVER_ID",
    "CLIENTID": "YOUR_BOT_ID",
    "log_channel_id": "Channel-id",
    "prefix": "YOUR_PREFIX",
    "autoRoleId": "ROLE ID",
    "ownersID": ["Id_1", "id_2"]
}
```
- Note: Prefix is not required in `config.json` you just need it if you want to create commands with prefix.

### If you need to create more commands just create new file in commands file with following example in other commands.

### If you need to create commands for prefix create file in commands file
