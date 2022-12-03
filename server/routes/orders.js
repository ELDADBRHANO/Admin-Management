const router = require("express").Router();
const {
  createOrders,
  
  getOrders,
  deleteOrders,
  updateOrder,
  getOrdersById
} = require("../controllers/orders");
router.get("/", getOrders);
router.get("/findDepartmentById/:id", getOrdersById);
router.post("/createOrders", createOrders);
router.put("/updateDepartment/:id", updateOrder);
router.delete("/deleteDepartment/:id", deleteOrders);

module.exports = router;
