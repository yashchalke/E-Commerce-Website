const Product = require('../db/Models/Product')

const NewProductController = async (req,res) =>{
    try{
        const {productname,productimg,price,desc} = req.body;
        const productexist = await Product.findOne({productname});
        if(productexist){
            res.status(400).json({
                Success : false,
                message : "Product Already Exist"
            });
        }
        const newProduct = new Product({
            productname:productname,
            productimg:productimg,
            price:price,
            desc:desc
        });

        await newProduct.save();

        
        return res.status(201).json({
                Success : true,
                message : "New Product Added SuccessFully!!",
                Data : newProduct
            });
    }
    catch(err){
        console.log("Error Occured while adding a new product",err);
        res.status(400).json({
                Success : false,
                message : "Something went Wrong!!!!"
            });
    }
}

module.exports = NewProductController;