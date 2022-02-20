const formateurcontroller = require("../controllers/formateurController");

const router = require("express").Router();

router.post("/saveFormateur", formateurcontroller.saveFormateur);
router.get("/getFormateur", formateurcontroller.getfindAll);
router.get("/getFormateur/:id", formateurcontroller.getById);
router.put("/putFormateur/:id", formateurcontroller.update);
router.delete("/deleteFormateur/:id", formateurcontroller.delete);
router.post("/addFormateurForFormation/:id", formateurcontroller.addFormateurForFormation);

module.exports = router;

