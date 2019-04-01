const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function (message) 
{
    if (message.content.includes ("AkBot"))
    {
        message.channel.send('On parle de moi ?! :stuck_out_tongue_winking_eye:')
    }
})

bot.on('message', function (message) 
{
    if (message.content.includes ("Akbot"))
    {
        message.channel.send('On parle de moi ?! :stuck_out_tongue_winking_eye:')
    }
})

bot.on('message', function (message) 
{
    if (message.content.includes ("akbot"))
    {
        message.channel.send('On parle de moi ?! :stuck_out_tongue_winking_eye:')
    }
})

bot.on('message', function (message) 
{
    if (message.content.includes ("Collection Day started!"))
    {
        bot.channels.get('501324980861272066').send('<@&561304424212070431> : GDC Clash Royale, le jour de collection commence !!!');
    }
})

bot.on('message', function (message) 
{
    if (message.content.includes ("New war started!"))
    {
        bot.channels.get("501324980861272066").send('<@&561304424212070431> : GDC Clash Royale, la guerre est déclarée !!!');    
    }
})

bot.on('message', function (message) 
{
    if (message.content.includes ("War ended!"))
    {
        bot.channels.get("501324980861272066").send('<@&561304424212070431> : GDC Clash Royale, la guerre est terminée !!!');    
    }
})



bot.login(process.env.TOKEN);
