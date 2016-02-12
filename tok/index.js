/**
 * Created by Jon on 12/02/16.
 */

"use strict";

(() => {
  const express   = require('express');
  const fs        = require('fs');
  const OpenTok   = require('opentok');

  const oKey = "45494112";
  const port = 3000;

  var app = express();

  fs.readFile("sec.txt", (err, data) => {
    var opentok = undefined;
    var sessionId = undefined;
    var sec = data.toString();

    if (err) {
      throw err;
    }

    app.use(express.static(__dirname));

    app.get('/', (req, res) => {
      var token = opentok.generateToken(app.get('sessionId'));

      console.log('sending client');

      res.render('index.ejs', {
        apiKey: oKey,
        sessionId: sessionId,
        token: token
      });

      //res.sendFile(__dirname + '/ot-client.html');
    });

    console.log(sec);

    opentok = new OpenTok(oKey, sec);
    //opentok.createSession(null, {mediaMode:"routed"}, function(error, session) {
    opentok.createSession({mediaMode:"routed"}, (error, session) => {
      if (error) {
        return console.log("Error creating session:", error);
      }

      sessionId = session.sessionId;
      console.log("Session ID: " + sessionId);

      app.set('sessionId', sessionId);

      app.listen(port, () => {
        console.log("started server");
      });

      //token = session.generateToken();

      //console.log(token);
    });
  });
})();
