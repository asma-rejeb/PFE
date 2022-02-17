const ficheInscriptioncontroller = require("../controllers/ficheInscriptionController");

const router = require("express").Router();

router.post("/saveFicheInscription", ficheInscriptioncontroller.saveFicheInscription);
router.get("/getFicheInscription", ficheInscriptioncontroller.getfindAll);
router.get("/getFicheInscription/:id", ficheInscriptioncontroller.getById);
router.put("/putFicheInscription/:id", ficheInscriptioncontroller.update);
router.delete("/deleteFicheInscription/:id", ficheInscriptioncontroller.delete);

module.exports = router;