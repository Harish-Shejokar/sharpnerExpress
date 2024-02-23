const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");


router.get("/contact-us", authController.getContactUs);

router.get("/success", authController.success);

router.get("/login", authController.login);

router.get("/get-msg", authController.getMessages);

router.post("/msg", authController.messages);

module.exports = router;
