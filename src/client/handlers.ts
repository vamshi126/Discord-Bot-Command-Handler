
import {ApplicationCommandDataResolvable, Collection, REST, Routes,} from "discord.js"
import {clientId,token,guildId}from "../config.json"
import fs from 'node:fs'
import path from 'node:path'
import { client } from "../index";

export async function loadHandlers(){
   client.commands=new Collection();



    const commandsPath=path.join(__dirname,'../commands')
   // console.log(commandsPath)
    const slashCommands:ApplicationCommandDataResolvable[]=[]; //all commands as JSON FOR REGISTRATION
    const commandFiles=fs.readdirSync(commandsPath)

    
     // console.log(commandFiles)
     for(const file of commandFiles){
       const filePath=path.join(commandsPath,file)
       const command=require(filePath)
       if('data' in command && 'execute' in command){
        client.commands.set(command.data.name,command)
        slashCommands.push(command.data.toJSON())
       }  
       
       
    }
   //console.log(slashCommands)

       const rest=new REST({version:'10'}).setToken(token);
        
(async()=>{
try{
 console.log(`Started refreshing ${slashCommands.length} application (/)commands!`)
  const data=await rest.put(
    Routes.applicationGuildCommands(clientId,guildId),
    {body:slashCommands},
  )
}catch(error){
  console.log(error)
}



})();


//event handler
 const eventsPath=path.join(__dirname,'../events')
  //console.log(eventsPath)
    const eventFiles=fs.readdirSync(eventsPath)

    
     // console.log(eventFiles)
     for(const eventfile of eventFiles){
       const eventfilePath=path.join(eventsPath,eventfile)
       const event=require(eventfilePath)
       if(event.once){
        client.once(event.name,(...args)=>event.execute(...args))
       }else{
        client.on(event.name,(...args)=>event.execute(...args))

       }
      
  
    }
     
  console.log('Code Author: Vamshi ')
 



}