import {Events}from 'discord.js'
import {client}from '..'
module.exports={
    name:Events.InteractionCreate,
    async execute(interaction){
  if(!interaction.isChatInputCommand()) return ;
   //console.log(interaction)
 
  const command=client.commands.get(interaction.commandName)

if(!command){
    console.log(`no command matching ${interaction.commandName} found!` )
    return;
}try
{await command.execute(interaction)}catch(error){
  console.log(`error in executing ${interaction.commandName}`)
  console.log(error)
}
   
}}