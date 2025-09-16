import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New client connected");

  ws.on("message", (messege) => {
    console.log("Received messege: ", messege);

    ws.send("Message from backend");
  })
})