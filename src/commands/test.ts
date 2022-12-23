import { SlashCommandBuilder} from 'discord.js'
module.exports={

    data:new SlashCommandBuilder()
          .setName('test')
          .setDescription('hmm'),
                    async execute(interaction){
                await  interaction.reply({content:'test 1'});
                 
          }
}
