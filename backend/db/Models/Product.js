const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productname : {
        type:String,
        unique:true,
        Required:true
    },
    productimg : {
        main : {
            type:String,
            unique:true,
            trim:true
        },
        gallery: [{
            type:String,
            unique:true,
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