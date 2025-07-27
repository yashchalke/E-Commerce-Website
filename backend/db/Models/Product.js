const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productname : {
        type:String,
        unique:true,
        required
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
        required
    },
    desc : {
        type:String,
        required
    }
},{timestamps:true});

module.exports = mongoose.model("Product",ProductSchema);