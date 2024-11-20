const mongoose = require("mongoose");
const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand") //this creates a db movieApp
  .then(() => {
    console.log("Mongo Connection Successful");
  })
  .catch(err => {
    console.log("Mongo connection failed");
  });


// const p = new Product({
//   name: "Apple",
//   price: 1.00,
//   category:"fruit"
// })

// p.save()
//   .then(p => {
//     console.log(p);
//   })
//   .catch(err => {
//     console.log(err);
//    })
const seedProducts = [
  {
    name: "Chocolate Whole Milk",
    price: 2.69,
    category: "dairy"
  },
  {
    name: "Organic Celery",
    price: 1.50,
    category: "vegetable"
  },
  {
    name: 'Organic Mini Seedless Watermelon',
    price: 3.99,
    category: "fruit"
  },
  {
    name: "Organic Godess Melon",
    price: 4.99,
    category: "fruit"
  },
  {
    name: "Fairy Eggplant",
    price: 1.00,
    category: "vegetable"
  }
]
Product.insertMany(seedProducts)
  .then(res => {
  console.log(res);
  })
  .catch(err => {
  console.log(err);
})

//if any one didn't pass the validations nothing gets inserted