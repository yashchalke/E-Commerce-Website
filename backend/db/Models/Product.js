const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productname : {
        type:String,
        unique:false,
        Required:true
    },
    productimg : {
        main : {
            type:String,
            trim:true
        },
        gallery: [{
            type:String,
            trim:true
        }]
    },
    price : {
        type:Number,
        Required:true
    },
    desc : {
        type:String,
        Required:true
    }
},{timestamps:true});

module.exports = mongoose.model("Product",ProductSchema);