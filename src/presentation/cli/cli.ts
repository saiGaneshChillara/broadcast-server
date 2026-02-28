import { WebSocketClient } from "../../infrastructure/websocket/WebSocketClient";
import { WebSocketBroadcastServer } from "../../infrastructure/websocket/WebSocketServer";

export function runCLI() {
  const command = process.argv[2];

  if (command === "start") {
    const server = new WebSocketBroadcastServer();
    server.start(3000);
  } else if (command === "connect") {
    const client = new WebSocketClient();
    client.connect("ws://localhost:3000");
  } else {
    console.log("Usage: ");
    console.log("broadcast-server start");
    console.log("broadcast-server connect");
  }
}