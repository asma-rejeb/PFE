/*const groupecontroller =require("../controllers/groupeController");

const router = require("express").Router();

router.post("/saveGroupe", groupecontroller.saveGroupe);
router.get("/getGroupe", groupecontroller.findAll);
router.get("/getGroupe/:id", groupecontroller.getById);
router.put("/putGroupe/:id", groupecontroller.update);
router.delete("/deleteGroupe/:id", groupecontroller.delete);

module.exports = router;
*/

const groupecontroller = require("../controllers/groupeController");

const router = require("express").Router();

router.post("/saveGroupe", groupecontroller.saveGroupe);
router.get("/getGroupe", groupecontroller.getfindAll);
router.get("/getGroupe/:id", groupecontroller.getById);
router.put("/putGroupe/:id", groupecontroller.update);
router.delete("/deleteGroupe/:id", groupecontroller.delete);

module.exports = router;