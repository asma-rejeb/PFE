const express=require("express");
const cors = require("cors");
require("./middleware/db");
const userRoute = require("./routes/userRoute");
const formateurRoute = require("./routes/formateurRoute");
const formationRoute = require("./routes/formationRoute");
const etudiantRoute = require("./routes/etudiantRoute");
const groupeRoute = require("./routes/groupeRoute");
const ficheInscriptionRoute = require("./routes/ficheInscriptionRoute");
const paiementRoute = require("./routes/paiementRoute");
const specialiteRoute = require("./routes/specialiteRoute");

const app = express();
app.listen(3000, () => { 
    console.log("app listen on port 3000")
});

app.use(express.json(), cors());
app.use("/api/user", userRoute);
app.use("/api/formateur", formateurRoute);    
app.use("/api/formation", formationRoute);
app.use("/api/etudiant", etudiantRoute);    
//app.use("/api/groupe", groupeRoute);  
app.use("/api/ficheInscription", ficheInscriptionRoute);
app.use("/api/paiement", paiementRoute);
app.use("/api/specialite", specialiteRoute);
