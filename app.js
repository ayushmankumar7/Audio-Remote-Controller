var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', s => {
  console.error('socket.io connection');

  s.on('color', d => {
    console.error('click on color '+d.id);
    s.broadcast.emit('color', d);
  });
  
});

http.listen(3000, () => console.error('Listening on http://localhost:3000/'));

console.error(
  'Yo buddy! Whats up!\n');

