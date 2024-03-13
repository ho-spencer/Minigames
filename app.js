const express = require("express");
const path = require("path");
const ejsMate = require("ejs-mate")

const app = express();
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));    // serve "public" directory (for static assets)

app.get("/", (req, res) => {
    res.render("home.ejs")
})

app.get("/rockpaperscissors", (req, res) => {
    res.render("games/RockPaperScissors.ejs");
})

app.listen(8080, () => {
    console.log("OPEN ON PORT 8080");
})