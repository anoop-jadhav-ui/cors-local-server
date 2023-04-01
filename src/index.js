var express = require("express");
var cors = require("cors");
var axios = require("axios");
var app = express();

app.use("/forward", cors(), async function (req, res, next) {
  const currentUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const urlToHit = currentUrl.split("forward/")[1];

  try {
    const response = await axios.get(urlToHit);
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});
