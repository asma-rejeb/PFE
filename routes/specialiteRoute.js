const specialitecontroller = require("../controllers/specialiteController");

const router = require("express").Router();

router.post("/saveSpecialite", specialitecontroller.saveSpecialite);
router.get("/getSpecialite", specialitecontroller.getfindAll);
router.get("/getSpecialite/:id", specialitecontroller.getById);
router.put("/putSpecialite/:id", specialitecontroller.update);

module.exports = router;