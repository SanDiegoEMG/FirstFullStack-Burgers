require(`dotenv`).config();
var express = require("express");
var app = express();
var mysql = require('mysql');
var exphbs = require('express-handlebars');


var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQLPASS,
    database: "burgers_db"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// tells server to accept these forms of data
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// handlebar requirements -- must be above the routes
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get("/", function (req, res) {
    res.send("Fight one giant at a time")
});

app.get("/hometwo", function (req, res) {
    connection.query("SELECT * FROM burgers", function (err, data) {
        console.log(data);
        res.render("hometwo", {
            burgers: data
        })
    })
})

app.get("/handle", function (req, res) {
    if(err) throw err;
    res.render("home");
});

app.get("/table", function (req, res) {
    connection.query("SELECT * FROM burgers", function (err, data) {
        if (err) throw err;
        res.json(data);
    })
})

app.post("/post/new", function (req, res) {
    connection.query("INSERT INTO burgers SET ?", [req.body], function(err, data){
        if(err) throw err;
        res.redirect("/hometwo");
    })
});

app.listen(PORT, function () {
    console.log(`Server is running on http://localhost:${PORT}`);
});