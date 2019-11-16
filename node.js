const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = "^";


const token = 'NjQ0MzAyNDI0MjE0OTk0OTY1.Xc6izw.qgpFDy64momM_DkkeHB-opmNtFg'
bot.login(token);



bot.on('ready', () => {
     console.log('Spreman sam za prcanje!');
     bot.user.setStatus('online');
     bot.user.setActivity('^komande', {type: "playing"}).catch(console.error);

  });
