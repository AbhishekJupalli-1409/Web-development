const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp')//this creates a db movieApp
    .then(() => {
    console.log("Connection Sucesful")
    })
    .catch(err => {
    console.log("failed")
    })

// { 
//     title: 'fsd',
//     year: 1989,
//     score: 9.4,
//     rating:'R'    
// }

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

// const amadues = new Movie({ title: 'Amadeuos', year: 1983, score: 9.4, rating: 'R' })
// amadues.save();//after creating the instance we have to save it


//https://mongoosejs.com/docs/api/model.html
//use above link for reference

// Movie.insertMany([//Movie is a model
// { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
// { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
// { title: 'The  Iron gaint', year: 1999, score: 7.5, rating: 'PG' },
// { title: 'Stand by me', year: 1986, score: 8.6, rating: 'R' },
// { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])//for insertMany method we so not need to call save

//     .then(data => {
//         console.log("It worked");
//         console.log(data);
// })



//Movie==> is a model
//Movie.find({}) ==> return me a thenable object
//Movie.find({}).then(data=>{console.log(data)})  ==>prints all data

//Movie.find({rating:'PG-13'}).then(data=>{console.log(data)})==>prints rating which is PG-13

//Movie.find({year:{$gt:2000}}).then(data=>{console.log(data)})==>movie year gt>2000//returns a array

//Movie.findOne({})//return 1st moive as object

//Remember .excec give a real callback n we can write async function instead of thenable obj

//Finding by id
//Movie.findById('671f116ec4db1f768c0a25ce').then(data=>console.log(data))


//IN MONGO if we recall when we update something it wont return any thing it tells number of things we update
//similar things happens with teh mongoose too


//Update movie Amadeous year to 1983--->1984

//Using updateOne==> Updates the first query it finds


// Movie.updateOne({title: 'Amadeuos'},{year:1984}).then(data=>{console.log(data)})
//this return the promise with number of values returned


//Similarly we can use updateMany to update manythings at the same time

//Doing multifle things at same

//Movie.findOneAndUpdate({title:'The  Iron gaint'},{score: 7}).then(data=>{console.log(data)})
//this give only theold data --> thats the default behaviour of it


//Movie.findOneAndUpdate({title:'The  Iron gaint'},{score: 7},{new:true}).then(data=>{console.log(data)})
//this option will give us the new updated version