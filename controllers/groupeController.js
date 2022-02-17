const Groupe =require("../models/groupe");

exports.saveGroupe = (req, res, next) => {
  

    const groupe = new Groupe({
      nom: req.body.nom,
      niveauFormation: req.body.niveauFormation,
      nbEtudiant: req.body.nbEtudiant,
      typeFormation: req.body.typeFormation,
      
    });

    groupe
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        status: true,
        data: groupe,
    });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

  //getAll groupe 
  exports.getfindAll =  (req, res) => {
    Groupe.find({}).populate("etudiant").exec(function(err, groupes) {
      if (err) {
        console.error("erreur");
      } else {
        
        res.json(groupes);
      }
    });
  }

  exports.getById = (req, res) => {
    //let productId = req.params.productId;
    Groupe.findById({ _id: req.params.id })
        .then((groupe) => {
            res.status(200).send(groupe)
        })
        .catch((error) => { console.log(error) });
}

exports.update = (req,res) => {
    Groupe.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          .then((groupe) => {
              res.status(200).send(groupe)
          })
          .catch((error) => { console.log(error) });
  }

  exports.delete = (req, res) => {
    Groupe.findOneAndDelete({ _id: req.params.id })
          .then((data) => {
              res.status(200).json("Deleted...")
          })
          .catch((error) => { console.log(error) });
  }