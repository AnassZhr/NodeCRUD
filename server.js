const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Product = require("./Models/ProductModel")

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/", (req,res) => {
    res.send("Hello Node Api")
})
app.get("/node",(req,res) => {
    res.send("yoo wassup")
})
app.post("/product",async(req,res)=>{
    try {
        const product= await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
} 
)
app.get("/products",async(req,res)=>{
    try {
       const product = await Product.find({});
       res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
    
})
app.get("/product/:id",async(req,res)=>{
    try {
       const {id} = req.params;
       const product = await Product.findById(id);
       res.status(200).json(product);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message:error.message})
        
    }
    
})
app.put("/products/:id",async(req,res) => {
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
app.delete("/product/:id",async(req,res)=>{
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

mongoose.connect("mongodb+srv://anasszahraoui:0611958330@cluster0.uydievu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(
    () => {console.log("connected to Database!")
    app.listen(3000, () => {
        console.log("Node api is running in port 3000")
    })}).catch((error) =>{console.log(error)
})