import {Events} from 'discord.js'
module.exports={
    name:Events.ClientReady,
    once:true,
    execute(client){
        console.log(`[READY!] logged in as ${client.user.tag}`)
    },
};