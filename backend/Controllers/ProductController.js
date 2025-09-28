const Product = require('../db/Models/Product')
const Cart = require('../db/Models/Cart');

const NewProductController = async (req, res) => {
   try {
    const { name, category, size, colors, price, image, description, inStock } = req.body

    const newproduct = new Product({
      name,
      category,
      size,
      colors,
      price,
      image,
      description,
      inStock,
    })

    await newproduct.save()

    res.status(201).json({
      success: true,
      message: 'Product Added Successfully',
      data: newproduct,
    })
  } catch (err) {
    console.log('Error occurred while creating new product:', err)
    res.status(400).json({
      success: false,
      message: 'Failed to add product',
    })
  }
};

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

const FilterController = async(req,res) =>{
     try {
    const { category, size, colors, price } = req.body
    const query = []

    if (category && category.length > 0) {
      query.push({ category: { $in: category } })
    }

    if (size && size.length > 0) {
      query.push({ size: { $in: size } })
    }

    if (colors && colors.length > 0) {
      query.push({ colors: { $in: colors } })
    }

    let priceArray = []
    if (Array.isArray(price)) {
      priceArray = price
    } else if (typeof price === 'string') {
      priceArray = [price]
    }

    if (priceArray.length > 0) {
      const priceConditions = []

      priceArray.forEach((range) => {
        switch (range) {
          case 'under-500':
            priceConditions.push({ price: { $lt: 500 } })
            break
          case '500-2000':
            priceConditions.push({ price: { $gte: 500, $lte: 2000 } })
            break
          case '2000-5000':
            priceConditions.push({ price: { $gte: 2000, $lte: 5000 } })
            break
          case 'above-5000':
            priceConditions.push({ price: { $gt: 5000 } })
            break
        }
      })

      query.push({ $or: priceConditions })
    }

    const products = await Product.find({ $and: query })
    res.status(200).json({
      success: true,
      message: 'Filtered products fetched successfully',
      data: products
    })
  } catch (err) {
    console.log('Error filtering products:', err)
    res.status(500).json({
      success: false,
      message: 'Error filtering products'
    })
  }
}


module.exports = {NewProductController,GetProductController,NewArrivalsController,TopSellingController,GetproductbyId,FilterController};