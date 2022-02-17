const FicheInscription =require("../models/ficheInscription");

exports.saveFicheInscription = (req, res, next) => {
  

    const ficheInscription = new FicheInscription({

      typeFormation: req.body.typeFormation,
      theme: req.body.theme,
      date: req.body.date,      
    });

    ficheInscription
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        status: true,
        data: ficheInscription,
    });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

  //getAll ficheInscription 
  exports.getfindAll =  (req, res) => {
    FicheInscription.find({}).populate("etudiant").exec(function(err, ficheInscriptions) {
      if (err) {
        console.error("erreur");
      } else {
        
        res.json(ficheInscriptions);
      }
    });
  }

  exports.getById = (req, res) => {
    //let productId = req.params.productId;
    FicheInscription.findById({ _id: req.params.id })
        .then((ficheInscription) => {
            res.status(200).send(ficheInscription)
        })
        .catch((error) => { console.log(error) });
}

exports.update = (req,res) => {
  FicheInscription.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          .then((ficheInscription) => {
              res.status(200).send(ficheInscription)
          })
          .catch((error) => { console.log(error) });
  }

  exports.delete = (req, res) => {
    FicheInscription.findOneAndDelete({ _id: req.params.id })
          .then((data) => {
              res.status(200).json("Deleted...")
          })
          .catch((error) => { console.log(error) });
  }