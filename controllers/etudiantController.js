const Etudiant =require("../models/etudiant");

exports.saveEtudiant = (req, res, next) => {
  

    const etudiant = new Etudiant({
      cin: req.body.cin,
      nom: req.body.nom,
      prenom: req.body.prenom,
      password: req.body.password,
      email: req.body.email,
      niveauScolaire: req.body.niveauScolaire,
      tel: req.body.tel,
      civilite: req.body.civilite,
      nationalite: req.body.nationalite,
      facebook: req.body.facebook,
      paiement: req.body.paiement,
       
    });

    etudiant
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        status: true,
        data: etudiant,
    });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

  //getAll etudiant 
  exports.getfindAll =  (req, res) => {
    Etudiant.find({}).populate("paiement").exec(function(err, etudiants) {
      if (err) {
        console.error("erreur");
      } else {
        
        res.json(etudiants);
      }
    });
  }

  exports.getById = (req, res) => {
    //let productId = req.params.productId;
    Etudiant.findById({ _id: req.params.id })
        .then((etudiant) => {
            res.status(200).send(etudiant)
        })
        .catch((error) => { console.log(error) });
}

exports.update = (req,res) => {
    Etudiant.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          .then((etudiant) => {
              res.status(200).send(etudiant)
          })
          .catch((error) => { console.log(error) });
  }

  exports.delete = (req, res) => {
    Etudiant.findOneAndDelete({ _id: req.params.id })
          .then((data) => {
              res.status(200).json("Deleted...")
          })
          .catch((error) => { console.log(error) });
  }