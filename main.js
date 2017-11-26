const Discord = require ('discord.js')
const bot = new Discord.Client();
const prefix = "/";
var guild = bot.guilds.get("340881716392493057")

bot.login("MzgzOTcwOTg4NDY4OTk0MDQ4.DPsAbQ.EKfoWwWxxeDpabJMluHOH9-mz_g");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "Bot Barrkyy", type: 0 } });
    console.log("Bot Ready !");
});

bot.on('message', message => {
  if (message.content === 'Bot') {
    message.reply('Le Bot est l\340 !')
  }
})

bot.on('message', message => {
  if (message.content === 're') {
    message.reply('Re !')
  }
})

bot.on('message', message => {
  if (message.content === 'oui') {
    message.reply('NON !')
  }
})

bot.on('message', message => {
  if (message.content === 'Oui') {
    message.reply('NON !')
  }
})

bot.on('message', message => {
  if (message.content === 'Non') {
    message.reply('Oui !')
  }
})

bot.on('message', message => {
  if (message.content === 'non') {
    message.reply('Oui !')
  }
})

bot.on('message', message => {
  if (message.content === 'salut') {
    message.reply('Coucou !')
  }
})

bot.on('message', message => {
  if (message.content === 'Salut') {
    message.reply('Hey ! :wink:')
  }
})

bot.on('message', message => {
  if (message.content === 'Bonsoir') {
    message.reply('Coucou !')
  }
})

bot.on('message', message => {
  if (message.content === 'Bonjour') {
    message.reply('Coucou !')
  }
})

bot.on('message', message => {
  if (message.content === 'Tic') {
    message.reply('Tac , BOOM :boom:')
  }
})

bot.on('message', message => {
  if (message.content === 'Tac') {
    message.reply('Tic , BOOM :boom:')
  }
})

bot.on('message', message => {
  if (message.content === (prefix + 'help')) {
    const embed = new Discord.RichEmbed()
            .setColor('#00FEDC')
            .addField("Commande du bot !", "/help : Affiche les commandes du bot ! \n /version : La version du bot !")
            .addField("Fun",  "/kill + user : Pour tuer quelqu'un !\n /sucide : Pour ce sucider ..")
            .addField("Image","/chat : Avoir un chat (mignion)\n /chien : Avoir un chien !")
            .addField("Info", "Barrkyy : Créateur du bot !")
  message.channel.send({embed});
  }
})

bot.on('message', message => {
  if (message.content === (prefix + 'version')) {
    const embed = new Discord.RichEmbed()
            .setColor('#00FEDC')
            .addField("Version du bot !", "Le bot est en 1.0")
            .addField("Info", "Prochaine version : 1.2")
  message.channel.send({embed});
  }
})

bot.on('guildMemberAdd', member => {
    const guild1 = member.guild.id;
    var guild = bot.guilds.get("340881716392493057")
    var add = bot.channels.get("363399225687408640")
    if(guild1 == guild.id) {
      add.send(`Salut ${member.user.username}, bienvenue sur le serveur **${guild.name}**! Lis bien les règles !`);
    } else {
      return
    }
    });

bot.on('guildMemberRemove', member => {
    const guild1 = member.guild.id;
    var guild = bot.guilds.get("340881716392493057")
    var add = bot.channels.get("363399225687408640")
    if(guild1 == guild.id) {
      add.send(`${member.user.username} a quitté le serveur **${guild.name}**. Bye bye... !`);
    } else {
      return
    }
    });

    bot.on('message', message => {
      if (message.content === (prefix + 'chien')) {
         message.channel.sendFile("https://i.ytimg.com/vi/wSTt04rOwa8/maxresdefault.jpg")
                  console.log("Chien demandée !")
      }
    });
    
    bot.on('message', message => {
      if (message.content === (prefix + 'chat')) {
         message.channel.sendFile("https://fr.animalblog.co/wp-content/uploads/2013/02/chat-content.jpg")
                  console.log("Chat demandée !")
      }
    });

    bot.on('message', message => {
      if (message.content === (prefix + 'sucide')) {
        message.reply('Enrevoir')
        message.channel.sendFile("http://lawofficer.com/wp-content/uploads/2017/01/suicide.jpg")
        console.log("Quelqu'un c'est sucider !")
      }
    });

    bot.on('message', message => {
      if (message.content.startsWith(prefix + 'kill')) {
      let member = message.mentions.members.first();
          message.channel.sendMessage('Aurevoir' + member)
          message.channel.sendFile("https://image.noelshack.com/fichiers-sm/2017/47/7/1511719852-234776-theratter-i-only-shoot-to-kill.jpg")
          console.log("Quelqu'un à fait un kill !")
        }
      });

      bot.on('message', message => {
        if (message.content.startsWith(prefix + 'calme')) {
        let member = message.mentions.members.first();
            message.channel.sendMessage('CALINNN + membre')
            message.channel.sendFile("https://image.noelshack.com/fichiers-sm/2017/47/7/1511719852-234776-theratter-i-only-shoot-to-kill.jpg")
            console.log("Quelqu'un à fait un calin !!")
          }
        });

      
      bot.on('message', message => {
      if (message.content === ('AH')) {
         message.reply('AH , AH !')
         message.channel.sendFile("https://i.ytimg.com/vi/tJzHyztXi4g/hqdefault.jpg")
         console.log("AH demandée !")
      }
    });

    bot.on('message', message => {
      if (message.content === ('Ah')) {
         message.reply('AH , AH !')
         message.channel.sendFile("https://i.ytimg.com/vi/tJzHyztXi4g/hqdefault.jpg")
         console.log("AH demandée !")
      }
    });

    bot.on('message', message => {
      if (message.content === ('ah')) {
         message.reply('AH , AH !')
         message.channel.sendFile("https://i.ytimg.com/vi/tJzHyztXi4g/hqdefault.jpg")
         console.log("AH demandée !")
      }
    });