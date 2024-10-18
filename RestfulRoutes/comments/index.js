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



