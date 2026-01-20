const WebSocket = require("ws");
const setupWSConnection = require("y-websocket/bin/utils").setupWSConnection;

const wss = new WebSocket.Server({ port: 1234 });

wss.on("connection", (conn, req) => {
  setupWSConnection(conn, req);
});

console.log("🟢 Yjs WebSocket Server running on port 1234");
