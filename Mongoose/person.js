const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shopApp") //this creates a db productApp
  .then(() => {
    console.log("Connection Successfull");
    //we dont need to nest all our code inside
  })
  .catch(err => {
    console.log("failed");
  });



const personSchema = new mongoose.Schema({
  first: String,
  last: String
});


//virtual creates the property on the object 
//Has 2 methods ==> get()->view and set()->upating

personSchema.virtual('fullName').get(function (){
  return `${this.first} ${this.last}`
})
personSchema.virtual('fullName').set(function (v){
        // `v` is the value being set, so use the value to set
        // `firstName` and `lastName`.
        const first = v.substring(0, v.indexOf(' '));
        const last = v.substring(v.indexOf(' ') + 1);
        this.set({ first, last });
})
      
//these pre and post hooks are used to run some code before n after we save somthing
personSchema.pre('save', async () => {
  console.log("about to save")
})
personSchema.post('save', async () => {
  console.log('just saved')
})
const Person = mongoose.model("Person", personSchema);
//creates a plural schema like person(singular)==> people(plural)



//const tammy=new Person({fisrt:'Tammy,last:'save'})
//if we run this it will create a fullname property  for tammy person object
//but this can't be stored in database
// to save using node run the tammy.save()