const express = require("express");
const app = express();
const people = require("./routers/people");
const login = require("./routers/auth");
app.use("/api/people", people);
app.use("/login", login);
// let { people } = require("./data");
app.use(express.json());
app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));

app.listen(5000, () => {
  console.log("Listening");
});
//inorder to get the data from post request we need to use this builtin middleware
// app.use(express.urlencoded({ extended: false }));
//to render all initial files

//app.use(express.static("./public"))
// app.js=>router=>controllers
