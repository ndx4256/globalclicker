const express = require("express");
const app = express();
var fs = require("fs");
var global = require('./Data.json');
// global.dataContents = require('./Data.json');


// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/api", (request, response) => {
  response.send("wtf");
});
app.get("/", (request, response) => {
  response.send("wtf");
});
app.get("/api/getdata", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).json(global.totalClicks);
});
app.post("/api/postclick", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.status(200).send("wtf");
  global.totalClicks++;
});

// listen for requests :)
setInterval(function () {
  let stringifieddata = JSON.stringify(global);
  fs.writeFileSync('Data.json', stringifieddata);
}, 2000);
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
