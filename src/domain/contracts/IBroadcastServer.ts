import { Iclient } from "./Iclient";

export interface IBroadcastServer {
  start(port: number): void;
  broadcast(message: string, sender?: Iclient): void;
}