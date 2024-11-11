const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')//this creates a db movieApp
    .then(() => {
    console.log("Connection Sucesful")
    })
    .catch(err => {
    console.log("failed")
    })
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})
//N the name of model is "Movie" now
const Movie = mongoose.model('Movie', movieSchema);//remember the 1st letter is caps
//and mongoose will make a collection of movies(plular) collection
//Now i can make new instances n save to mongo db

 const amadues = new Movie({ title: 'Amadeuos', year: 1983, score: 9.4, rating: 'R' })
amadues.save();//after creating the instance we have to save it


we can put validations ineach db properties

but when wetry n update them it won't work
So went have to tell again to use all the validations

for updating like findOneAndUpdate we don't new to save() it.It automatically returns a promise
we can use .then and .catch on that


Product.findOneAndUpdate({name:'Tyre pump'},{price:200,new:true})

//if we put new:true then only it will display new updated value
then use this below one
Product.findOneAndUpdate({name:'Tyre pump'},{price:200,new:true,runValidators:true})




MIDDLEWARE

//write code before or after something is written and executed like thatusing the MIDDLEWARE
post and rpe hooks // hooks are synchronous
//if u are deleting a user we have to delete all the user n his commentss from the app
//while using mongoose dont use arrow functions at all