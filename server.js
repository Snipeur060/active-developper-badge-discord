const aoijs = require('aoi.js');

 const bot = new aoijs.Bot({
   token: "yourtoken",
   prefix: "++",
   intents: "all",
   SuppressPackageErrors: true
 });

bot.onMessage() //enables bot to see messages (required for executing Commands)
bot.status({
  text: "The Green Badge Prefix ++",
  type: "WATCHING",
  status: "online",
  time: 12
})
    
bot.onInteractionCreate()

bot.command({
name: "create",
code: `$createApplicationCommand[global;info;Information concernant le bot;true;slash;message:sends a message:true:3]
$suppressErrors[]
`
})
bot.command({
name: "deleteslash",
code: `
$getApplicationCommandId[info]
$deleteSlashCommand[global;$getApplicationCommandId[test]]`
/*
    Code Breakdown:
This will delete our created slashcommand that we made.
*/
})

bot.interactionCommand({
name: "info", 
prototype : 'slash',
code:`
$interactionReply[Badge]
`
})
bot.readyCommand({
 channel: '',
 code: `$log[
 Add your bot https://canary.discord.com/api/oauth2/authorize?client_id=$clientID&permissions=2147486888&scope=applications.commands%20bot
 ]
`
 /*
 Send the link to the console
 */
})
