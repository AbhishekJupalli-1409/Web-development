const express = require('express');
const path = require('path');
const app = express();

// View Engine Setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // Path has a method called as the join



app.get('/', (req, res) => {
res.render('home.ejs') // default place it looks is indie the dir names views so we have to prepare this before hand
})


app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random.ejs',{num})  //{rand:num}use this method n send obj n num will be available in ejs using rand
})


app.get('/cats', (req, res) => {
    const cats = ['mummy','daddy','hero','zero','zolo'];
    res.render('cats',{cats})
})


app.get('/r/:subreddit/:subtopic', (req, res) => { // what ever the parameter we pass in browser it stores n then send to params
    const { subreddit,subtopic } = req.params; // this line is for destructuring
    res.render('subreddit', { subreddit, subtopic })
   
})

app.listen(3000,() => {
    console.log("listen")
})