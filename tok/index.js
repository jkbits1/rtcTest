/**
 * Created by Jon on 12/02/16.
 */

"use strict";

(() => {
  const fs = require('fs');

  fs.readFile("sec.txt", (err, data) => {
    if (err) {
      throw err;
    }

    console.log(data.toString());
  });

})();