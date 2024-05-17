const express = require("express");
const app = express();

app.use(express.static("public"));

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
  if(req.query.bmark){
    res.sendFile(__dirname + "/views/input.html");  
  }else{
    const link = Buffer.from(req.query.l, "utf-8").toString("base64");
    res.redirect("/link/?l=" + link);
  }
  console.log(__dirname);
});

const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
