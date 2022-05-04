//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(request, response){
    response.send("Hello nodemon");
});

app.get("/contact", function(request, response){
    response.send("i love contacts");
});

app.listen(3000, function(){
    console.log("server on port 3000");
});

