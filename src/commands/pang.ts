import {SlashCommandBuilder} from 'discord.js'
module.exports={
data:new SlashCommandBuilder()
          .setName('pang')
          .setDescription('hmm'),
          async execute(interaction){
await interaction.reply('off');
          }
}