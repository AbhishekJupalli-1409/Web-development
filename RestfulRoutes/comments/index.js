const express = require('express')
const app = express()
const path = require('path');



app.use(express.json()) // for parsing application/json
//BELWO THING IS A MIDDLE WARE USED FOR PARSING DATA
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded //ALWASY RUNS THIS CODE ISPITE OF REQUESR


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')


app.listen(3000, () => {
    console.log("listening on port 3000")
})


const comments = [
    {
        username: 'Todd',
        comment:'Lol thats so funny'
    },
    {
        username: 'Abhi',
        comment:'go to hell'
    },
    {
        username: 'Naresh',
        comment:'go to mukesh'
    }

   
]


app.get('/comments',(req, res)=> {
    res.render('./comments/index.ejs',{comments});
})



app.get('/comments/new',(req, res)=> {
    res.render('./comments/new.ejs',{comments});
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({username,comment})
    console.log(req.body);
    res.redirect('/comments')
   
})
// Actually after this point we have to relad the page to view changes . How to do it without reload lets see

// We can do thaqt using the redirection