const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/about", (req, res) => {
    res.render("about")
})

router.get("/resources", (req, res) => {
    res.render("resources")
})

router.get("/social", (req, res) => {
    res.render("social")
})

router.get("/orthoses", (req, res) => {
    res.render("orthoses")
})

router.get("/contact", (req, res) => {
    res.render("contact")
})

module.exports = router