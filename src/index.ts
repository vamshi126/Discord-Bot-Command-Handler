import dotenv from "dotenv"
import {ExtendedClient}from './client/client'
import {loadHandlers}from './client/handlers'

export const client =new ExtendedClient()
dotenv.config()

client.login(process.env.TOKEN)
loadHandlers()

