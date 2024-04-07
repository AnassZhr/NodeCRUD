const Product = require("../Models/ProductModel");
const asyncHandler = require('express-async-handler');



// get all products
getProducts = asyncHandler(async(req,res)=>{
    try {
       const product = await Product.find({});
       res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
    
})
// get one product
getProduct = asyncHandler(async(req,res)=>{
    try {
       const {id} = req.params;
       const product = await Product.findById(id);
       res.status(200).json(product);
        
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
        
        
    }
    
})

//add a product 
addProduct = asyncHandler(async(req,res)=>{
    try {
        const product= await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
} )

//update a product
updateProduct = asyncHandler(async(req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404).json( {message: `cannot find any product with this id : ${id}`})

        }
        res.status(200).json(product);
        
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
})

// delete a product
deleteProduct = asyncHandler(async(req,res)=>{
    try {
        const {id} =req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json( {message: `cannot find any product with this id : ${id}`})

        }
        res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
    
})

module.exports  = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}