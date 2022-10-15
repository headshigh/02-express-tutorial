const express = require("express");
const app = express();
const { products, people } = require("./data");
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1><a href=/api/products>Proudcts</a>");
});
app.get("/api/products", (req, res) => {
  const newProducts = products.map((data) => {
    const { id, name, image } = data;
    return { id, name, image };
  });
  res.json(newProducts);
});
app.get(`/api/products/:fileId`, (req, res) => {
  console.log(req.params);
  const singleProduct = products.find(
    (product) => product.id == req.params.fileId
  );
  if (!singleProduct) {
    res.status(404).send("product doesnot exist");
  }
  res.json(singleProduct);
});
app.get("/api/products/:productId/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  console.log("hi");
});
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  let sortedProducts = { ...products };
  if (req.query.search) {
    sortedProducts = products.filter((data) =>
      data.name.startsWith(req.query.search)
    );
  }
  if (req.query.limit) {
    sortedProducts = sortedProducts.slice(0, Number(req.query.limit));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched your request");
    res.status(200).json({ success: "true", data: [] });
  }
  return res.status(200).send(sortedProducts);
});

app.listen(5000, () => {
  console.log("Server is listenign on port 5000...");
});
