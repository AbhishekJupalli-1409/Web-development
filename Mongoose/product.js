const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')//this creates a db productApp
    .then(() => {
        console.log("Connection Sucesful")
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
const Product = mongoose.model('Product', productSchema)

// const bike = new Product({  name:'Bullet',price: 20000,categories:['Cycle','riding'] })
// //saves in the bd
// bike.save()
//     .then(data => {
//         console.log("saved to db");
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
//         console.log("saved to db");
//         console.log(data);
        
//     })
//     .catch(err => {
//         console.log("ohno erro");
//         console.log(err);
// })


//BEWLOW code is for updating don't forget runValidators



// Product.findOneAndUpdate({ name: 'Tyre pump' }, { price: 99 },{ new: true, runValidators: true })
//     .then(data => {
//         console.log("saved to db");
//         console.log(data);
        
//     })
//     .catch(err => {
//         console.log("ohno erro");
//         console.log(err);
// })




    const jersey = new Product({  name:'Cycyling ropes',price: 67.93,categories:['cycyling'],qty:{online:10},size:'M' })
//saves in the bd
jersey.save()
    .then(data => {
        console.log("saved to db");
        console.log(data);
        
    })
    .catch(err => {
        console.log("ohno erro");
        console.log(err);
})


