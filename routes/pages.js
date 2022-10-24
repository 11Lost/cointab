const express = require("express")
const router = express.Router()
const logout = require("../controller/logout")

const logged = require("../controller/logged")
router.get("/", logged, (req, res) => {
    if (req.user) {
        res.render("index", { status: "logged", user: req.user })
    }
    else {
        res.render("index",{status:"no",user:"NOTHING"});
    }
})
router.get("/signup", (req, res) => {
    res.sendFile("signup.html", { root: "./public" })
})
router.get("/login", (req, res) => {
    res.sendFile("login.html", { root: "./public" })
})
router.get("/logout",logout)
module.exports = router
