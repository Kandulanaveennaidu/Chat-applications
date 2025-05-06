module.exports = (socket, io) => {
    console.log(`🟢 New user connected: ${socket.id}`);
  
    socket.on('send_message', (data) => {
      io.to(data.receiverId).emit('receive_message', data);
    });
  
    socket.on('join', (userId) => {
      socket.join(userId);
      console.log(`User ${userId} joined room ${userId}`);
    });
  
    socket.on('disconnect', () => {
      console.log(`🔴 User disconnected: ${socket.id}`);
    });
  };
  