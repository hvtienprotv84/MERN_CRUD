const express = require("express");
const router = express.Router();
const {
  postProduct,
  getProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

//Insert Data To Database
router.post("/products", postProduct);

//Fetch Data From Database
router.get("/products", getProducts);

//Fetch a Product
router.get("/products/:id", getOneProduct);

//Update Data
router.put("/products/:id", updateProduct);

//Delete a Product
router.delete("/products/:id", deleteProduct);

module.exports = router;
