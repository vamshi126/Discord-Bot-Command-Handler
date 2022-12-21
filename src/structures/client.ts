
import {ApplicationCommandDataResolvable, Client, Collection, GatewayIntentBits,} from "discord.js"
import { CommandType } from "../typings/commands";
import {glob} from'glob'
import {promisify}from "util"
import { RegisterCommandsOptions } from "../typings/client";
import path from 'node:path'
import { client } from "..";
const globPromise=promisify(glob)
export class ExtendedClient extends Client{
    commands:Collection<string,CommandType>=new Collection();
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
    
   start(){
      this.RegisterModules()
      this.login(process.env.TOKEN)

   }
async importFile(filePath:string){
return(await import(filePath)).default
}


      async RegisterModules(){
    const commandsPath=path.join(__dirname,'./src/commands')
    console.log(commandsPath)
     const slashCommands:ApplicationCommandDataResolvable[]=[]; //all commands are loaded here
     const commandFiles=await globPromise(`${__dirname}/../commands/*{.ts,.js}`);
    
      commandFiles.forEach(async(file)=>{
       const filePath=path.join(commandsPath,file)
       const command=require(filePath)
       if('data' in command && 'execute' in command){
        client.commands.set(command.data.name,command)
       }  else{
        console.log(`[warning] file at ${filePath} is missing fields`)

       }
       console.log(client.commands)
       
    })
     
      console.log(commandFiles)
     /* commandFiles.forEach(async(filePath)=>{
       let command:CommandType=await this.importFile(filePath)
        if(!command.name)return;
        this.commands.set(command.name,command)
        slashCommands.push(command)
    })
    */
      
      }

 



    }
