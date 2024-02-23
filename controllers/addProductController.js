const path = require("path");

exports.getAddProduct = (req, res, next) => {
  // res.send(
  //   `<form action="/admin/product" method="post"><input type="text" name="title" /> <button type="submit">submit</button></form>`
  res.sendFile(path.join(__dirname, "views", "addProduct.html"));
};

exports.product = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};
