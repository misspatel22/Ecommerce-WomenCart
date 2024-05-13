const express = require("express");
const router = express.Router();
const contactusControlle = require("../controller/contactus");

router.post("/", contactusControlle.contactUs);

module.exports = router;