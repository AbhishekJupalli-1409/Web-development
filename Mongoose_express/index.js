const express = require('express')
const app = express()
const path = require('path')
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Product = require('./models/product')

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand") //this creates a db movieApp
  .then(() => {
    console.log("Mongo Connection Successful");
  })
  .catch(err => {
    console.log("Mongo connection failed");
  });

//middlewares
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))


const categories = ['fruit', 'vegetable', 'dairy'];
//VIEW ALL READ

app.get('/products', async (req, res) => {
const { category } = req.query;
  if (category) {
    const products = await Product.find({ category: category });
    res.render("products/index", { products,category });
  }
  else {
  
    const products = await Product.find();
     res.render("products/index", { products, category:"All" });
  }
  // console.log(products);
  // res.send('All data is fetched succesfully');
 

})

//CREATE ONE
//here we dont need any async
app.get('/products/new', (req, res) => {
  res.render('products/new',{categories});
})
  
app.post('/products', async (req, res) => {
  //we dont have access to req.body imediately so we use urlencoded
  const newProduct = new Product(req.body);
  await newProduct.save();
  //if we refresh the page it we resubmit the form again n create more products
  //to avoid this we use redirects
  // console.log(req.body);
  // res.send("making ur product");
  res.redirect(`/products/${newProduct._id}`);

})


//VIEW ONE SEPARATE
app.get('/products/:id', async (req, res) => {
  const id = req.params.id;
  const foundproduct = await Product.findById(id);
  // console.log(foundproduct)
  // res.send(`${foundproduct}`)
  res.render('products/show', { foundproduct });
})

app.get('/products/:id/edit', async (req, res) => {
  const id = req.params.id;
  const getproduct = await Product.findById(id);
  res.render('products/edit', { getproduct,categories });
})

app.put('/products/:id', async (req, res) => {
  const id = req.params.id;
  const updatedproduct =await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })
  res.redirect(`/products/${updatedproduct._id}`);
  
  // console.log(req.body);
  // res.send("put updated")
})

app.delete("/products/:id", async (req, res) => {
  const id = req.params.id;
  const deletedproduct = await Product.findByIdAndDelete(id);
  res.redirect('/products')
  // res.send("delted!!");
});

app.listen(3000, ()=>{
    console.log("listening on port 3000")
})