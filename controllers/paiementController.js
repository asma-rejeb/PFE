const Paiement =require("../models/paiement");
const Etudiant = require("../models/etudiant")
exports.savePaiement = (req, res, next) => {
  

    const paiement = new Paiement({
      montant: req.body.montant,
      reste: req.body.reste,
      date: req.body.date,
      
    });

    paiement
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        status: true,
        data: paiement,
    });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

  //getAll paiement 
  exports.getfindAll =  (req, res) => {
    Paiement.find({}).populate("etudiant").exec(function(err, paiements) {
      if (err) {
        console.error("erreur");
      } else {
        
        res.json(paiements);
      }
    });
  }

  exports.getById = (req, res) => {
    //let productId = req.params.productId;
    Paiement.findById({ _id: req.params.id })
        .then((paiement) => {
            res.status(200).send(paiement)
        })
        .catch((error) => { console.log(error) });
}

exports.update = (req,res) => {
    Paiement.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          .then((paiement) => {
              res.status(200).send(paiement)
          })
          .catch((error) => { console.log(error) });
  }


  exports.addPayementForStagiaire = (req,res,next) => {
    const etudiantId =  req.params.id;
    const payementObject =  req.body;
    const newPayememnt = new Paiement(payementObject);
  
    Etudiant.findOne({ _id: etudiantId },  (err, foundEtudiant) => {
      if (!foundEtudiant) {
        return err;
      }
      foundEtudiant.paiement.push(newPayememnt);
       newPayememnt.etudiant = foundEtudiant;
       newPayememnt.save((error, savedPayement) => {
        if (error) {
          return error;
        }
        return res.json(savedPayement);
      });
      foundEtudiant.save((error, savedEtudiant) => {
        if (error) {
          return error;
        }
        return res.json(savedEtudiant); 
      });
      return foundEtudiant;
    });
        
}

