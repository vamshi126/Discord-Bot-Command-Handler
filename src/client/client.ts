import { Client, Collection, GatewayIntentBits, } from "discord.js"

export class ExtendedClient extends Client{
    commands:Collection<string,any>=new Collection();
    constructor(){
        super({
            intents:[
      
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,

    ]});
    }
 
   }
