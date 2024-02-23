const express = require("express");
const router = express.Router();
const productController = require("../controllers/addProductController")


router.post("/product", productController.getAddProduct);

router.get("/add-product", productController.product);

module.exports = router;
