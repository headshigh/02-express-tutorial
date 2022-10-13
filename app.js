const http = require("http");
const { url } = require("inspector");
const { readFileSync } = require("fs");
const homePage = readFileSync("./navbar-app/index.html", (err) => {
  console.log(err);
});
const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { "content-type": "text/html" });
  if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Contact Page</h1>");
  } else if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Not found</h1>");
  }
  res.end();
});
server.listen(5000);
