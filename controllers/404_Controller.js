const path = require("path")

exports.pageNotFound = (req, res) => {
  // res.status(404).send("<h1>Page Not found</h1>");
  res.status(404).sendFile(path.join(__dirname, ".. /", "views", "404.html"));
};