const paiementcontroller = require("../controllers/paiementController");

const router = require("express").Router();

router.post("/savePaiement", paiementcontroller.savePaiement);
router.get("/getPaiement", paiementcontroller.getfindAll);
router.get("/getPaiement/:id", paiementcontroller.getById);
router.put("/putPaiement/:id", paiementcontroller.update);
router.post("/addPayementForStagiaire/:id", paiementcontroller.addPayementForStagiaire);

module.exports = router;