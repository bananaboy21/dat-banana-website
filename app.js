const express = require("express");
const app = express();


const path = require("path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.get("/support", (req, res) => {
    res.render("support");
});


app.listen(3000, () => {
    console.log("Server started at http://localhost:3000");
});
