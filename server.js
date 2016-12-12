var express = require('express');
var app = express();

app.get("/", function (request, response) {
  // http://expressjs.com/en/4x/api.html
  response.send(
    { ipaddress: request.header("X-Forwarded-For").split(',')[0]
    , language: request.header("Accept-Language").split(',')[0]
    , software: request.header("User-Agent").match(/\([^)]+\)/) // any character except )
      [0].slice(1, -1) // remove ( and )
    }
  )
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
