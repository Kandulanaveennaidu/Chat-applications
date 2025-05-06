const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');
const chatSocket = require('./sockets/chat.socket');
require('dotenv').config();

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  chatSocket(socket, io);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});