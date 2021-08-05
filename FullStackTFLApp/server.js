//SOC
const express = require('express');
var path=require('path');
var app = express();


app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req, res){
    res.sendFile("index.html");
});

var routes=require("./router");
routes(app);           


app.listen(9898);
console.log("Express TFLStore App is listening on port 9898");