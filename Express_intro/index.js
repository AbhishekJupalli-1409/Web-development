const express = require('express')
const app = express()
//console.dir(app)
// app.use((req,res)=>
//     {
//     console.log("we got a newrequest");
//     //console.log(req);
//     //request only one at a time for the below 3



//    // res.send("hello we got ur request")
//     // res.send({ color: "red" })
    
//     res.send('<h1>This is my web page</h1>')
//     }
// )


app.get('/cats', (req, res) => {
    res.send('Meow');
    
})

app.get('/dogs', (req, res) => {
    res.send('Bow bow');
    
})



app.get('/cats', (req, res) => {
    res.send('Meow');
    
})




app.listen(3000,() => {
    console.log("Listening on port 3000")
})



