import {SlashCommandBuilder} from 'discord.js'

module.exports={
data:new SlashCommandBuilder()
          .setName('ping')
          .setDescription('hmm'),
          async execute(interaction){
           
          await  interaction.deferReply()
         
          await interaction.editReply('ping')
       
          }
}