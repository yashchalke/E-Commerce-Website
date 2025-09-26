const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  productimg: {
    main: { type: String, trim: true, unique:false},
    gallery: [{ type: String, trim: true, unique:false}],
  },
  price: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  category: {
    type: String, // e.g., "Tshirt", "Jeans"
    required: true,
  },
  color: {
    type: String, // e.g., "black", "red"
    required: true,
  },
  size: {
    type: String, // e.g., "Medium", "X-Large"
    required: true,
  },
  style: {
    type: String, // e.g., "Casual", "Formal"
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);




// const mongoose = require('mongoose');

// const ProductSchema = new mongoose.Schema({
//     productname : {
//         type:String,
//         unique:false,
//         Required:true
//     },
//     productimg : {
//         main : {
//             type:String,
//             trim:true
//         },
//         gallery: [{
//             type:String,
//             trim:true
//         }]
//     },
//     price : {
//         type:Number,
//         Required:true
//     },
//     desc : {
//         type:String,
//         Required:true
//     }
// },{timestamps:true});

// module.exports = mongoose.model("Product",ProductSchema);