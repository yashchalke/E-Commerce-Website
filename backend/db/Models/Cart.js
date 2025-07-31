const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    UserId:{
        type: mongoose.ObjectId,
        ref: 'User',
        required:true
    },
    items:[{
        productId:{
            type:mongoose.ObjectId,
            ref:'Product',
            required:true
        },
        quantity:{
            type:Number,
            default : 1
        }
    }]
},{timestamps:true});

module.exports = mongoose.model("Cart",CartSchema);