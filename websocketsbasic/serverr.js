const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create a new express application
const app = express();

// Create an HTTP server
const server = http.createServer(app);

// Bind socket.io to the server
const io = socketIo(server);

// Serve the index.html file when the root URL is accessed
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/indexx.html');
});

// Listen for connection events for incoming sockets
io.on('connection', (socket) => {
    // console.log(socket)
  console.log('A user connected');

  // Listen for 'chat message' events and broadcast them to all clients
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  // Log when a user disconnects
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
