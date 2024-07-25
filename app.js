const express = require("express")
const app = express() 
require('dotenv').config()
const port = process.env.PORT

const hbs = require('hbs');

//set server port
app.listen(port,()=>{console.log("App runing on port:",port)})

//hbs config
app.set('view engine','hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) {
   if(err) console.log("Ooops partials", err ,' !!!')
});
//static supplies
app.use(express.static('public'));
//basic routing
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/elements',(req,res)=>{
    res.render('elements')
})
app.get('/generic',(req,res)=>{
    res.render('generic')
})