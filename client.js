/**
 * Created by Jon on 07/02/16.
 */

"use strict";

window.onload = () => {
  var socket = io();
  var button = document.getElementById('sendData');

  button.addEventListener('click', () => {
    socket.emit('another event', {hi: 'there'});
  }, false);

  //    var socket = io.connect('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
  });
};


