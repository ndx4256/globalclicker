
const express = require("express");
const app = express();
global.dataContents = require('./Data.json');


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
  response.sendFile(__dirname + "/Data.json");
});
app.post("/api/postclick", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  dataContents.totalClicks += 1;
});
function savedata(jsonObj) {
  "use strict";

  var jsonContent = JSON.stringify(jsonObj);
  console.log(jsonContent);
  var fs = require("fs");
  fs.writeFileSync("Data.json", jsonContent, "utf8", function(err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  });
}
function saveClicks() {
  savedata(dataContents);
}
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  setInterval(function () {
    saveClicks();
  }, 1000);
  console.log("Your app is listening on port " + listener.address().port);
});
