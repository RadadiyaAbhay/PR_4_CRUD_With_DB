const mongoose = require('mongoose');

const productSchema = new  mongoose.Schema({
    title : String,
    price : Number,
    rating : Number,
    description : String,
    discount : Number,
    brand : String,    
    category : String    
},{timestamps: true})

const productModel = mongoose.model("products" , productSchema) ;
module.exports = productModel;