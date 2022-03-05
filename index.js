const { GuildMember } = require('discord.js12');
const { Client, Intents } = require('discord.js12');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js12')
 

const rmote = 'remote mode'
 
var amogus=0;
var streamtoggle=0;
var nowplaying="Among Us";
var remotemode=0;
var temp = 0;
var channel="general";
var troll = 0;
var goodbot = 0;
var lol = 0;
var GuiMem = "";
var userid = "";
var valocount = 0;
// users in order. Noah, Zac, Luke, Dakota, Thomas, Sam, Greame
var users = [179681756008415242, 208734416229367809, 309733450628464642, 379759847387693056, 413072147167051815, 359495003245903884, 207688631702388736];

//get command classes
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})




// client.commands = new Discord.Collection();
 
// const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// for(const file of commandFiles){
//     const command = require(`./commands/${file}`);
 
//     client.commands.set(command.name, command);
// }


//online test
  client.once('ready', () => {
     console.log('bot is online!');
     client.user.setActivity("Among Us", {
        type: "PLAYING",
        
      });
 });



 //goodbot counter 

 client.on('message', message=>{
    userid = message.author.id;


if(message.author != 912527129529434132){
        
    
    
    if(message.content.includes('trigger')){
        message.channel.send("good bot");
    
    }else if(message.content.includes('good bot')){
       goodbot++;
        // goodbot
       message.channel.send('OwO');
       message.channel.send('*blushes*');
    }else if(message.content.includes('309733450628464642')){
        
        message.channel.send('<@309733450628464642>');
       
    }else if(message.content.startsWith(`setgame`)){
        if(message.author.id == "179681756008415242"){
            nowplaying = message.content.substring(8);
            client.user.setActivity(nowplaying, {
                type: "PLAYING",
            })
            return;
        }
        
     }else if(
        // leaugue of counting
        message.content.includes('league')){
            message.channel.send({files: ["https://i.imgur.com/rNyJXKh.jpg"]});
            lol++;
    }else if(
        // valo coutinnnn
        message.content.includes('valo')){
            message.channel.send({files: ["https://i.imgur.com/XKUtfWp.jpg"]});

        
        valocount++;
        
    }else if(
        // amogus amogus amogus amogus amogus amogus amogus amogus
        message.content.includes('among us')){
            message.channel.send({files: ["https://c.tenor.com/3rvy5dfUPlsAAAAi/among-us-twerking.gif"]});

        //amogus amogus amogus count
        amogus++;

    }else if(
        // valo troll
        message.content.includes('Valo')){
            message.channel.send({files: ["https://i.imgur.com/XKUtfWp.jpg"]});

        //valo count
        valocount++;
    }else if(
        // test chunk
        message.content.includes('test')){
            GuiMem = message.author.username;
            //message user id grab
            if(message.author.id == "179681756008415242"){
                message.channel.send(GuiMem + ' my scrunglo');
            }else if(message.author.id == "208734416229367809"){
                message.channel.send(GuiMem + ' the dark soul' );
            }else if(message.author.id == "309733450628464642"){
                message.channel.send('***notices*** '+GuiMem+'*** and nuzzles you***');
            }else{
                message.channel.send(GuiMem);
            }
            // react to their message
          message.react('😘');
          
         //dm the user
          message.author.send("<@"+GuiMem+">")

          
    }else if(
        // delay test
        message.content.includes('amogus')){
            message.channel.send("among");
            setTimeout(() => {  
                message.channel.send("us");
             }, 2000);
    }else if(
        // remote mode
      message.content.startsWith(`${rmote}`)){
           if(message.author.id == "179681756008415242"){
            temp = message.content.substring(12);
            message.author.send(temp);
            
            

               if (remotemode === 0){
                   remotemode = 1;
                   message.author.send("remote mode activated in channel "+channel);
               }else{
                   remotemode = 0;
                   message.author.send("remote mode deactivated in channel "+channel);
               }
            
           }else{
               if(remotemode === 1){
           }
        }
           

    }else if(
        // valo count
        message.content.includes('gamecount')){
            message.channel.send("valorant has been mentioned "+valocount+" times")
            
    }else if(
         // delete dakota's 4th message
        message.author.id == "379759847387693056"){
            troll++;
            if (troll === 4){
                troll = 0;
                message.delete()
            }

        }
        
        
    

 }else{
    return;
}
 });


client.login("OTEyNTI3MTI5NTI5NDM0MTMy.YZxPHQ.deZ1-Bhq2xIZua3Gc26ZAcoNbtg")
 
