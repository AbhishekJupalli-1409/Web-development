const express = require('express')
const app = express();
// THERE IS NO DEFAULT WAY FOR EXPREESS TO KNOW HOW TO TAKE BODY
// SO WE ARE ADDING THESE THINGS

app.use(express.json()) // for parsing application/json
//BELWO THING IS A MIDDLE WARE USED FOR PARSING DATA
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded //ALWASY RUNS THIS CODE ISPITE OF REQUESR

app.listen(3000, () => {
    console.log('listen on port 3000')
})

app.get('/tacos', (req, res) =>{
    res.send('hi');
})



app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`here is your ${meat} and ${qty} kgs`);
})