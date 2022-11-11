const aoijs = require('aoi.js');

 const bot = new aoijs.Bot({
   token: "yourtoken",
   prefix: "++",
   intents: "all",
   SuppressPackageErrors: true
 });

bot.onMessage() //enables bot to see messages (required for executing Commands)
bot.status({
  text: "Made by 💻снайпер060⌨#1913 Prefix ++",
  type: "PLAYING",
  status: "dnd",
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
name: "rthtjrjj",
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
