const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const authRoutes = require("./routes/auth");
const path = require("path");
const pageNotFound = require("./controllers/404_Controller")

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(authRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "home.html"));
});

app.use(pageNotFound.pageNotFound);

app.listen("3000", () => {
  console.log("server started on 3000");
});
