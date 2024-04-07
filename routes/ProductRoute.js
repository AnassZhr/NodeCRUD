
const express = require("express");
const router = express.Router();
const Product = require("../Models/ProductModel");
const {getProducts, getProduct, updateProduct, deleteProduct, addProduct} = require("../controllers/productController")

router.post("/",addProduct)
router.get("/",getProducts)
router.get("/:id",getProduct)
router.put("/:id",updateProduct)
router.delete("/:id",deleteProduct)


module.exports = router;