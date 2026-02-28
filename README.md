# Broadcast Server (CLI + WebSockets + Clean Architecture)

A CLI-based real-time broadcast server built with **TypeScript** and **Clean Architecture principles**.

This project demonstrates how real-time systems like chat applications, multiplayer games, and live dashboards work internally using WebSockets.

---

## 🚀 Features

- CLI-based server & client
- Real-time message broadcasting
- Multiple client handling
- Graceful disconnection handling
- Clean Architecture separation
- Dependency Injection
- UUID-based client tracking
- Event-driven architecture
- Scalable folder structure

---

## 🧠 Architecture

This project follows **Clean Architecture principles**, ensuring:

- Business logic is independent of frameworks
- Infrastructure can be replaced without affecting core logic
- Proper separation of concerns
- Dependency Inversion Principle (DIP)

### Layer Breakdown

#### 1️⃣ Domain
- Defines business contracts (`IClient`, `IBroadcastServer`)
- Contains core abstractions
- No external dependencies

#### 2️⃣ Application
- Contains use cases (`BroadcastMessage`)
- Orchestrates business rules
- Depends only on Domain layer

#### 3️⃣ Infrastructure
- WebSocket implementation using `ws`
- Concrete implementations of domain contracts
- CLI interaction handling

#### 4️⃣ Presentation
- CLI command parsing
- Entry-point handling

---

## 📂 Project Structure

```
broadcast-server/
│
├── src/
│   ├── domain/
│   │   └── contracts/
│   │       ├── IClient.ts
│   │       └── IBroadcastServer.ts
│   │
│   ├── application/
│   │   └── usecases/
│   │       └── BroadcastMessage.ts
│   │
│   ├── infrastructure/
│   │   └── websocket/
│   │       ├── WebSocketServer.ts
│   │       └── WebSocketClient.ts
│   │
│   ├── presentation/
│   │   └── cli/
│   │       └── cli.ts
│   │
│   └── main.ts
│
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/saiGaneshChillara/broadcast-server.git
cd broadcast-server
```

Install dependencies:

```bash
npm install
```

---

## 🛠 Usage

### 🔹 Start the Server

```bash
npm run dev start
```

This starts the WebSocket server at:

```
ws://localhost:3000
```

---

### 🔹 Connect as Client

Open a new terminal:

```bash
npm run dev connect
```

You can open multiple terminals to simulate multiple clients.

---

### 🔹 Build the Project

```bash
npm run build
```

Compiles TypeScript into the `dist/` directory.

---

## 🖥 How It Works

1. The server listens for incoming WebSocket connections.
2. When a client connects:
   - A unique UUID is generated.
   - The client is stored in an in-memory `Map`.
3. When a client sends a message:
   - The message is passed to the `BroadcastMessage` use case.
   - The server broadcasts the message to all other connected clients.
4. When a client disconnects:
   - The client is removed from the `Map`.
   - Memory is cleaned safely.

---

## 🔄 Example Flow

Terminal 1:

```bash
npm run dev start
```

Terminal 2:

```bash
npm run dev connect
```

Terminal 3:

```bash
npm run dev connect
```

Type a message in one client →  
All other connected clients receive the broadcast instantly.

---

## 🏗 Tech Stack

- Node.js
- TypeScript
- WebSocket (`ws`)
- Clean Architecture
- CLI-based interface

---

## 🧩 Design Patterns Used

- Adapter Pattern (WebSocket wrapped as `IClient`)
- Dependency Injection
- Dependency Inversion Principle
- Event-driven architecture

---

## ⚙ Scripts

```json
"scripts": {
  "dev": "ts-node-dev src/main.ts",
  "build": "tsc"
}
```

---

## 📌 What This Project Demonstrates

- Real-time communication systems
- Multi-client server management
- Clean Architecture implementation in Node.js
- Proper separation of concerns
- Scalable backend design
- Handling asynchronous event-driven systems
- Writing CLI-based backend tools

---

## 🚀 Possible Future Improvements

- Username support
- Rooms / channels
- Authentication layer
- Message history storage
- Redis Pub/Sub integration
- Docker support
- Unit & integration tests (Jest)
- Publish as a global npm CLI package
- Add logging & monitoring

---

## 💼 Resume Value

This project showcases:

- Backend system design fundamentals
- Clean Architecture implementation
- Real-time WebSocket communication
- Scalable project structuring
- CLI-based application development
- Practical understanding of event-driven systems

---

## 📜 License

MIT