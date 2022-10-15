const { application } = require("express");
const express = require("express");
const app = express();
let { people } = require("./data");
app.use(express.json);
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.get("/api/people", (req, res) => {
  res.status(200).json({ sucess: true, data: people });
});
app.post("/api/people", (req, res) => {
  if (!req.body.name) {
    return res
      .status(400)
      .json({ success: false, msg: "please enter the name" });
  } else {
    res.status(201).json({ success: true, person: req.body.name });
  }
});
app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.name) {
    return res.status(200).send(`Welcome ${req.body.name}`);
  } else {
    res.status(401).send("Please provide credentials");
  }
});
app.listen(5000, () => {
  console.log("Listening");
});
//inorder to get the data from post request we need to use this builtin middleware
// app.use(express.urlencoded({ extended: false }));
//app.use(express.static("./public"))
