const authorize = (req, res, next) => {
  if (req.query.user == "john") {
    console.log("authorize");
    req.user = { name: "john", id: 3 };
    next();
  } else {
    res.status(401).send("unauthorized");
    next();
  }
};
module.exports = authorize;
