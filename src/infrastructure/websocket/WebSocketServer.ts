import { WebSocket, WebSocketServer as WSS } from "ws";
import { Iclient } from "../../domain/contracts/Iclient";
import { randomUUID } from "crypto";
import { IBroadcastServer } from "../../domain/contracts/IBroadcastServer";
import { BroadcastMessage } from "../../applications/usecases/BroadcastMessages";


class WSClient implements Iclient {
  public id: string;

  constructor(private socket: WebSocket) {
    this.id = randomUUID();
  }
  send(message: string): void {
    this.socket.send(message);
  }
  close(): void {
    this.socket.close();
  }

  get raw() {
    return this.socket;
  }
}

export class WebSocketBroadcastServer implements IBroadcastServer {
  private clients: Map<string, WSClient> = new Map();
  private wss!: WSS;

  start(port: number): void {
    this.wss = new WSS({ port });

    const boradcastUseCase = new BroadcastMessage(this);

    this.wss.on("connection", (socket) => {
      const client = new WSClient(socket);
      this.clients.set(client.id, client);

      console.log(`Client connected: ${client.id}`);

      socket.on("message", (data) => {
        const message = data.toString();
        boradcastUseCase.execute(message, client);
      });

      socket.on("close", () => {
        this.clients.delete(client.id);
        console.log(`Client disconnected: ${client.id}`);
      });
    });

    console.log(`Server running on ws://localhost:${port}`);
  }
  broadcast(message: string, sender?: Iclient): void {
    for (const client of this.clients.values()) {
      if (client.id !== sender?.id) {
        client.send(message);
      }
    }
  }
  
}