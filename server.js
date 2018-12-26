var express = require ("express");
var app = express();

var PORT = process.env.PORT || 8080;

app.get("/", function(req, res){
    res.send("One step at a time")
});

app.listen(PORT, function(){
    console.log(`Server is running on http://localhost:${PORT}`);
});