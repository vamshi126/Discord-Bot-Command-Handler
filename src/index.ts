import DiscordJS, {  EmbedBuilder,GatewayIntentBits, TextChannel,    } from 'discord.js'
import dotenv from 'dotenv'

export const client =new DiscordJS.Client({
    intents:[
      
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,

    ]
})

dotenv.config()


client.login(process.env.TOKEN)





client.on('ready',()=>{
    console.log("Testing..")
    client.user?.setStatus('idle')
    client.user?.setPresence(
    {activities:
    [
        {name:'Bolt!'}
    ]
    }) 
  
})





