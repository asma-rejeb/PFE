const etudiantcontroller = require("../controllers/etudiantController");

const router = require("express").Router();

router.post("/saveEtudiant", etudiantcontroller.saveEtudiant);
router.get("/getEtudiant", etudiantcontroller.getfindAll);
router.get("/getEtudiant/:id", etudiantcontroller.getById);
router.put("/putEtudiant/:id", etudiantcontroller.update);
router.delete("/deleteEtudiant/:id", etudiantcontroller.delete);

module.exports = router;

