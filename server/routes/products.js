const router = require("express").Router();
const {
  createProducts,
  getProducts,
  deleteProducts,
  updateProduct,
  getProductById
} = require("../controllers/product");
router.get("/", getProducts);
router.get("/getProductById/:id", getProductById);
router.post("/createProducts", createProducts);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProducts/:id", deleteProducts);

module.exports = router;
