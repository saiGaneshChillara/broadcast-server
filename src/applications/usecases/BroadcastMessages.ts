import { IBroadcastServer } from "../../domain/contracts/IBroadcastServer";
import { Iclient } from "../../domain/contracts/Iclient";

export class BroadcastMessage {
  constructor(private server: IBroadcastServer) {}

  execute(message: string, sender?: Iclient): void {
    this.server.broadcast(message, sender);
  }
}