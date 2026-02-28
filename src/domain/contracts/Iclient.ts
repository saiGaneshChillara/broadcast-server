export interface Iclient {
  id: string;
  send(message: string): void;
  close(): void;
}