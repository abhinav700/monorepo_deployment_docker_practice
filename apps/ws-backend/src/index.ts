import { WebSocketServer } from "ws";
import {prisma} from "@repo/db/client"
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (message) => {
    console.log("Received messege: ", message);

    ws.send("Message from backend");
    prisma.message.create({
      data:{
        content: message.toString()
      }
    })
  })
})