var express = require ("express");
var app = express();

var PORT = process.env.PORT || 8080;

// tells server to accept these forms of data
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.send("One step at a time")
});

app.post("/api/new", function(req, res){
    res.json(req.body);
});

app.listen(PORT, function(){
    console.log(`Server is running on http://localhost:${PORT}`);
});