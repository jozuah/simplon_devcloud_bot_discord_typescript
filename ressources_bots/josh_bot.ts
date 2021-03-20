require('dotenv').config();

//Use .env file to see my token
//console.log(process.env.DISCORD_JOSH_TOKEN);

//Allow you to interact with discord API
const Discord = require('discord.js');

// Instance of the class Client from discord
const my_bot = new Discord.Client();

//Element qui interpelle le BOT
const PREFIX = "/"

// Event listener, qui va se déclencher quand le Bot est online
my_bot.on('ready', () => {
    console.log(`${my_bot.user.username}`,"is ready")
})



//Event listener qui se déclenche si le message !help est écrit
my_bot.on('message',(message) => {
    //si le message est écrit par le bot, ne rien faire
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        //je récupère la substring juste après le signe "/", s'il y a plusieurs mots, ils ne sont pas récupérer car je prends l'item [0] avant le split
        const [bot_command] = message.content.trim().substring(PREFIX.length).split(" ");
        console.log(bot_command)

        if (bot_command === 'hello'){
            //message sans interpeller le sender
            message.channel.send('YO !');
            return
        }   
        //si le message vient d'une personne, la réponse s'active
        if (bot_command === 'help'){
            //message.reply('wesh attends 2 sec, y a des reufs qui vont venir te secourir');
            //var online_members = my_bot.users.cache.get('260470569823240203').username
            //var online_members = my_bot.users.cache.get('260470569823240203')
            

            // Get the Guild and store it under the variable "list"
            //const list = my_bot.users.cache.get("260470569823240203"); 

            // Iterate through the collection of GuildMembers from the Guild getting the username property of each member 
            //list.members.forEach(member => console.log(member.user.username)); 
            //for (x in list) {
            //    console.log(x.username)
            //}

            var randomUser = my_bot.users.cache.random();
            console.log(randomUser.username)
           
            return;
        }
        else {
            message.reply('désolé ma gueule je ne connais pas cette commande');
            return
        }
    }
})

//log my bot online
my_bot.login(process.env.DISCORD_JOSH_TOKEN)