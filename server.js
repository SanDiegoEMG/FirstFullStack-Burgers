require(`dotenv`).config();
var express = require("express");
var app = express();
var mysql = require('mysql');

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

app.get("/", function (req, res) {
    res.send("Fight one giant at a time")
});

app.get("/table", function (req, res){
    connection.query("SELECT * FROM burgers", function(err, data) {
        res.json(data);
    })
})

app.post("/api/post", function (req, res) {
    res.json(req.body);
});

app.listen(PORT, function () {
    console.log(`Server is running on http://localhost:${PORT}`);
});