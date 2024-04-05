
const express = require("express");
const router = express.Router();
const Product = require("../Models/ProductModel");

router.post("/",async(req,res)=>{
    try {
        const product= await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
} 
)
router.get("/",async(req,res)=>{
    try {
       const product = await Product.find({});
       res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
    
})
router.get("/:id",async(req,res)=>{
    try {
       const {id} = req.params;
       const product = await Product.findById(id);
       res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
    
})
router.put("/:id",async(req,res) => {
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
router.delete("/:id",async(req,res)=>{
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
module.exports = router;