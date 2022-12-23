import dotenv from "dotenv"
import {ExtendedClient}from './client/client'



export const client =new ExtendedClient()
dotenv.config()
client.login(process.env.TOKEN)

client.start()



