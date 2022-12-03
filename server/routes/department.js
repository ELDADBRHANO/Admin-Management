const router = require("express").Router();
const {
  createDepartment,
  getDepartment,
  findDepartmentById,
  updateDepartment,
  deleteDepartment,
} = require("../controllers/depatements");
router.get("/", getDepartment);
router.get("/findDepartmentById/:id", findDepartmentById);
router.post("/createDepartment", createDepartment);
router.put("/updateDepartment/:id", updateDepartment);
router.delete("/deleteDepartment/:id", deleteDepartment);

module.exports = router;
