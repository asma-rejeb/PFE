const Paiement =require("../models/paiement");

exports.savePaiement = (req, res, next) => {
  

    const paiement = new Paiement({
      nom: req.body.nom,
      niveauFormation: req.body.niveauFormation,
      nbEtudiant: req.body.nbEtudiant,
      typeFormation: req.body.typeFormation,
      
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
