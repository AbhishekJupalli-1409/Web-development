mongosh -- Enter the mngo shell
default db is test
show dbs-- shows all databases
use animailShelter -- creates new db with name n goes in that db
db.dogs.insertOne({name:"Charlie",age:3,breed:"Cargie",catFriendly:true}) -- creates dogs collection n insert into into
ctrl + c *2 -- exit db shell

CREATE
 db.dogs.insert({name: 'Goldie',    age: 9,    breed: 'Dauberman',    catFriendly: false}) -- insert one or many
 db.dogs.find()-- displays all dogs with pointer -- in future we can iterate
 db.dogs.find().limit(2) -- give only 2 results

Delete DB 
 productApp> db.dropDatabase()
 { ok: 1, dropped: 'productApp' }
 productApp> show dbs

UPDATE
 db.dogs.updateOne({name:'Abhi'},{$set:{age:20}}) -- use this specific $set to update db , we can add new value pairs too using this
 db.cats.updateOne({name:'Meow'},{$set:{age:6},$currentDate:{lastChanged:true}}) -- update age to 6 n currentDate{special function} to when its modified 

DELETE
 db.cats.deleteOne({name:'hero'})  -- deleted the hero catFriendly
 //while deleting 

 db.cats.deleteMany({}) -- Deletes all at one nothing left
 //We canuse fancy operators also to delete them or,< extra
[
 {name:'Rusty',breed:'Mutt',age:3,weight:25,size:'M',personality:{catFriendly:true,childFriendly:true}},
 {name:'Chungus',breed:'Husky',age:3,weight:65,size:'L',personality:{catFriendly:false,childFriendly:true}},
 {name:'Bella',breed:'Chihuahua',age:8,weight:7,size:'S',personality:{catFriendly:false,childFriendly:false}},
 {name:'Malakai',breed:'Great Pyrenees',age:2,weight:110,size:'L',personality:{catFriendly:false,childFriendly:true}},
 {name:'Dodger',breed:'Corgi',age:10,weight:31,size:'M',personality:{catFriendly:true,childFriendly:true}},
 {name:'Miska',breed:'Corgi',age:13,weight:27,size:'M',personality:{catFriendly:true,childFriendly:true}}
]
 
 db.dogs.find({'personality.childFriendly':true}) -- we have to use '' to find object inside object n use . to access it

USING operators
 geater n less
    db.dogs.find({age:{$gt:8}})  == Greater than
    $gte == greater n equalto
    $lte == less thanor equalto

 $in operator
    bd.dogs.find({breed:{$in:['Mutt','Corgi']}})

 $ne == not equal to
 $nin == not in

 Logical operators
    $and,$or,$nor,$not

