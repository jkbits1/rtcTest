"use strict";

const express   = require('express');
const http      = require('http');
const sockets   = require('socket.io');

//const port = 80;
const port = 3000;

var app = express();
var server = http.Server(app);

//var io = sockets(server);
var io = sockets(server);

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  console.log('sending client');

  res.sendFile(__dirname + '/rtc-client.html');
});

//io.sockets.on('connection', socket => {
io.on('connection', socket => {
  socket.emit('news', {hello: 'world'});
  socket.on('another event', data => {
    console.log(data);
  });
});

server.listen(port, () => {
  console.log(`listening: ${port}`);
});
//io.listen(port);
//