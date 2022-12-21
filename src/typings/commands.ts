import { ChatInputApplicationCommandData, CommandInteraction, CommandInteractionOptionResolver, PermissionResolvable } from "discord.js";
import { ExtendedClient } from "../structures/client";
interface RunOptions{
    client:ExtendedClient,
    interaction:CommandInteraction,
    args:CommandInteractionOptionResolver
}
type RunFunction={options:RunOptions} 
export type CommandType={
userpermissions:PermissionResolvable[],

run:RunFunction;
}& ChatInputApplicationCommandData