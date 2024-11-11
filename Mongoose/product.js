const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')//this creates a db shopApp
    .then(() => {
        console.log("Connection Sucessfull")
        //we dont need to nest all our code inside
    })
    .catch(err => {
    console.log("failed")
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:20
    },
    price:{
        type: Number,
        required: true,
        min:[0,'Price must be positive']
    },
    onSale: {
        type: Boolean,
        default:false
    },
    categories: {
        type: [String],
        default:['Cycling']
    },
    qty: {
        online: {
            type: Number,
            default: 0,
            min:[0,'Price must be positive']
            
        },
        instore: {
            type: Number,
            default: 0,
            min:[0,'Price must be positive']
        }
    },
    size: {
        type: String,
        enum:['S','M','L']
    }

});


 productSchema.methods.greet = function () {
     console.log("hello ! welcome to my project");
     console.log(`from ${this.name}`)
}

productSchema.methods.addCategory = function (newcat) {
    this.categories.push(newcat);//for adding new category
    this.price = this.price + 20; //reducing the price by 20 rupees
    return this.save();
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
   return this.save();//insteadof doing it on instace--- we can declare save here in instance method n then this thenable
}


productSchema.statics.fireSale = function () {
   return this.updateMany({},{onSale:true,price:0})//1st input refers to all instances
}


const Product = mongoose.model('Product', productSchema)



const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bullet' });
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log("toggle sucessfull");
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}
findProduct();


//bewlow code everythings price to zero
Product.fireSale().then(res=>console.log(res)) //updatereturn n modied n returened


// const bike = new Product({  name:'Bullet',price: 20000,categories:['Cycle','riding'] })
// //saves in the bd
// bike.save()
//     .then(data => {
//         console.log("Successfully saved to db");
//         console.log(data);
        
//     })
//     .catch(err => {
//         console.log("ohno erro");
//         console.log(err.errors.name.properties.message);
//     });

//     const bike2 = new Product({  name:'Tyre pump',price: 20,categories:['Cyclest'] })
// //saves in the bd
// bike2.save()
//     .then(data => {
//         console.log("Successfully saved to db");
//         console.log(data);
        
//     })
//     .catch(err => {
//         console.log("ohno erro");
//         console.log(err);
// })


//BEWLOW code is for updating don't forget runValidators



// Product.findOneAndUpdate({ name: 'Tyre pump' }, { price: 99 },{ new: true, runValidators: true })
//     .then(data => {
//         console.log("Successfully saved to db");
//         console.log(data);
        
//     })
//     .catch(err => {
//         console.log("ohno erro");
//         console.log(err);
// })




//     const jersey = new Product({  name:'Cycyling ropes',price: 67.93,categories:['cycyling'],qty:{online:10},size:'M' })
// //saves in the bd
// jersey.save()
//     .then(data => {
//         console.log("Successfully saved to db");
//         console.log(data);
        
//     })
//     .catch(err => {
//         console.log("ohno erro");
//         console.log(err);
// })


