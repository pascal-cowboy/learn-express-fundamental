const express = require("express");
const app = express();
const logger = require("./logger");
//! req => middleware = res

app.use(logger);
app.get("/", logger, (req, res) => {
  res.send("home");
});
app.get("/about", logger, (req, res) => {
  res.send("about");
});

app.get("/products", logger, (req, res) => {
  res.send("products");
});

app.listen(5000, () => {
  console.log("Server is Listening on port 5000....");
});
