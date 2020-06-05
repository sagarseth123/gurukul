const express = require("express");
const bodyParser = require("body-parser");
const _ = require("lodash");
const ejs = require("ejs");
const mongoose = require("mongoose");


const path = require("path");
const fs = require("fs");


const app = express();

const dirPath = path.join(__dirname, "public/pdf");
const files = fs.readdirSync(dirPath).map(name => {
    return {
        name: path.basename(name, ".pdf"),
        url: `/pdf/${name}`
    };
});




app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render("home", {});
});


app.get("/class6", (req, res) => {
    res.render("class6", { files });
});



app.get("/class6", function(req, res) {
    res.render("class6", {});
});
app.get("/class7", function(req, res) {
    res.render("class7", {});
});
app.get("/class8", function(req, res) {
    res.render("class8", {});
});
app.get("/class9", function(req, res) {
    res.render("class9", {});
});
app.get("/class10", function(req, res) {
    res.render("class10", {});
});
app.get("/class11", function(req, res) {
    res.render("class11", {});
});
app.get("/class12", function(req, res) {
    res.render("class12", {});
});






app.listen(3000, function(req, res) {
    console.log("the server is running");
});