import WebSocket from "ws";
import readline from "readline";

export class WebSocketClient {
  private socket!: WebSocket;

  connect(url: string) {
    this.socket = new WebSocket(url);

    this.socket.on("open", () => {
      console.log("Connected to server");

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.on("line", (input) => {
        this.socket.send(input);
      });
    });

    this.socket.on("message", (data) => {
      console.log(`Broadcast: ${data.toString()}`);
    });

    this.socket.on("close", () => {
      console.log("Disconnected from server");
    });
  }
}