const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.ObjectId,
         ref: 'User', 
         required: true },
    items: [{
        productid:mongoose.ObjectId,
        quantity:{
            type:Number,
            default:1
        }
    }] 
},{timestamps:true});

module.exports = mongoose.model('CartItem',CartSchema);