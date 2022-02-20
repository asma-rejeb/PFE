const ficheAppelController = require("../controllers/ficheAppelController");

const router = require("express").Router();

router.post("/saveFicheAppel",ficheAppelController.saveFicheAppel);
router.get("/getFicheAppel",ficheAppelController.getfindAll);
router.get("/getFicheAppel/:id",ficheAppelController.getById);
router.put("/putFicheAppel/:id",ficheAppelController.update);
router.delete("/deleteFicheAppel/:id",ficheAppelController.deleteById);

module.exports = router;