require('dotenv').config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const productRoute = require("./routes/ProductRoute"); 
const errorMiddleware = require("./middleware/errorMiddleware");

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.Port

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/products",productRoute)

app.get("/", (req,res) => {
    throw new  Error("fake error")
   // res.send("Hello Node Api")
})
app.get("/node",(req,res) => {
    res.send("yoo wassup")
})
app.use(errorMiddleware);


mongoose.connect(MONGO_URL)
.then(
    () => {console.log("connected to Database!");
    app.listen(PORT, () => {
        console.log(`Node api is running in port ${PORT}`)
    })}).catch((error) =>{console.log(error)
})