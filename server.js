// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/link", function(req, res) {
  res.sendFile(__dirname + "/views/link.html");
  const link = Buffer.from(req.query.l, "base64").toString();
  res.set('Cache-Control', 'max-age=0')
  res.redirect(308, link);
  res.send();
  console.log(link);
});
app.get("/input", function(req, res) {
  res.sendFile(__dirname + "/views/input.html");
  if(req.query.bmark){
    
  }else{
    const link = Buffer.from(req.query.l, "utf-8").toString("base64");
    res.redirect("/link/?l=" + link);
  }
  console.log(__dirname);
});


// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
