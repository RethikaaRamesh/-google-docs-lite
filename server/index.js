
const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// MongoDB
mongoose.connect(
  "mongodb+srv://admin:rethu123@google-docs-lite.fltfrgt.mongodb.net/editor"
);
const Doc = mongoose.model(
  "Doc",
  new mongoose.Schema({ content: String })
);

let content = "";

io.on("connection", async (socket) => {
  console.log("Client connected:", socket.id);

  const saved = await Doc.findOne();
  if (saved) content = saved.content;
  socket.emit("load", content);

  socket.on("typing", (user) => {
    socket.broadcast.emit("typing", user);
  });

  socket.on("stopTyping", () => {
    socket.broadcast.emit("stopTyping");
  });

  socket.on("cursor", (data) => {
    socket.broadcast.emit("cursor", data);
  });

  socket.on("update", async (html) => {
    content = html;
    await Doc.findOneAndUpdate({}, { content }, { upsert: true });
    socket.broadcast.emit("update", html);
    console.log("💾 Saved to MongoDB");
  });
});

server.listen(5000, () =>
  console.log("Server running on port 5000")
);