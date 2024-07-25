const express = require("express")
const app = express() 
const port = 8080
const hbs = require('hbs');

//set server port
app.listen(port,()=>{console.log("App runing on port:",port)})

//hbs config
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
//static supplies
app.use(express.static('public'));
//basic routing
app.get('/',(req,res)=>{
    res.render('home')
})
