const express = require("express");
const app = express();

//  req => middleware => res
//logger is middleware function
//when we have some middleware we need to pass control to the next middleware
// we can create a separate  file to store logger function and import it with require("./logger.js") and use app.use(logger)
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

app.get("/", logger, (req, res) => {
  res.send("Home");
});
app.get("/about", logger, (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});
