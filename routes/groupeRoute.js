const groupecontroller =require("../controllers/groupeController");
const router = require("express").Router();
///signup hwa chtar route theni , w chtar loul fl index.js
router.post("/saveGroupe", groupecontroller.saveGroupe);
router.get("/getGroupe", groupecontroller.findAll);
router.get("/getGroupe/:id", groupecontroller.getById);
router.put("/putGroupe/:id", groupecontroller.update);
router.delete("/deleteGroupe/:id", groupecontroller.delete);

module.exports = router;
