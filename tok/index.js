/**
 * Created by Jon on 12/02/16.
 */

"use strict";

(() => {
  const fs      = require('fs');
  const OpenTok = require('opentok');

  const oKey = "45494112";

  fs.readFile("sec.txt", (err, data) => {
    if (err) {
      throw err;
    }

    console.log(data.toString());

    var opentok = new OpenTok(oKey, data.toString());
    var sessionId;
    //opentok.createSession(null, {mediaMode:"routed"}, function(error, session) {
    opentok.createSession({mediaMode:"routed"}, (error, session) => {
      var token = undefined;

      if (error) {
        return console.log("Error creating session:", error);
      }

      sessionId = session.sessionId;
      console.log("Session ID: " + sessionId);

      token = session.generateToken();

      console.log(token);
    });
  });
})();
