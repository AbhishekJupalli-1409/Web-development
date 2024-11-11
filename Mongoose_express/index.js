const express = require('express')
const app = express()
const path = require('path')
const mongoose = require("mongoose");


mongoose
  .connect("mongodb://127.0.0.1:27017/movieApp") //this creates a db movieApp
  .then(() => {
    console.log("Mongo Connection Sucesful");
  })
  .catch(err => {
    console.log("Mongo connection failed");
  });


app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

app.get('/dogs', (req, res) => {
    res.send('woof!')
})

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})