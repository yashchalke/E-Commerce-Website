const Product = require('../db/Models/Product')
const Cart = require('../db/Models/Cart')

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

const GetProductController = async (req,res)=>{
    try{
        const products = await Product.find({});
        if(products.length === 0){
            res.status(404).json({
                Success : false,
                message : "There are no Products"
            });
        }
        else{
            res.status(200).json({
                Success : true,
                message : "Products Fetched Successfully",
                Data : products
            });
        }

    }catch(err){
        console.log("Something Went Wrong" , err);
        res.status(404).json({
                Success : false,
                message : "Something went wrong!!!"
            });
    }
}

const NewArrivalsController = async (req,res) => {
    try{
    const list = await Product.find().sort({createdAt: -1}).limit(4);
    if(list){
        res.status(200).json({
            Success:true,
            message: "New Products Fetched Successfully!!!",
            Data:list
        });
    }
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            Success:false,
            message:"No products Found. Something went wrong",
            Error:err
        })
    }
}

const TopSellingController = async (req,res) => {
    try{
    const list = await Product.find().limit(4);
    if(list){
        res.status(200).json({
            Success:true,
            message: "New Products Fetched Successfully!!!",
            Data:list
        });
    }
    }
    catch(err){
        console.log(err);
        res.status(404).json({
            Success:false,
            message:"No products Found. Something went wrong",
            Error:err
        })
    }
}

const GetproductbyId = async(req,res) =>{
    try{
        const {id} = req.params;
        const checkproduct = await Product.findById(id);
        if(!checkproduct){
            res.status(401).json({
                Success:false,
                message:"Product not found!!!"
            });
        }
        else{
            res.status(200).json({
                Success:true,
                message:"Product Found!!!",
                Data:checkproduct
            });
        }
    }
    catch(err){
        console.log("Error Fetching single Product" , err)
        res.status(401).json({
                Success:false,
                message:"Product not found!!!",
                error:err
            });
    }
}


module.exports = {NewProductController,GetProductController,NewArrivalsController,TopSellingController,GetproductbyId};