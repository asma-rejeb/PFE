const formationcontroller =require("../controllers/formationController");
const router = require("express").Router();
///signup hwa chtar route theni , w chtar loul fl index.js
router.post("/saveFormation", formationcontroller.saveFormation);
router.get("/getFormation", formationcontroller.findAll);
router.get("/getFormation/:id", formationcontroller.getById);
router.put("/putFormation/:id", formationcontroller.update);
router.delete("/deleteFormation/:id", formationcontroller.delete);

module.exports = router;