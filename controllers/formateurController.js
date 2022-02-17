const Formateur =require("../models/formateur");

exports.saveFormateur = (req, res, next) => {
  

    const formateur = new Formateur({
      cin: req.body.cin,
      nom: req.body.nom,
      prenom: req.body.prenom,
      password: req.body.password,
      email: req.body.email,
      civilite: req.body.civilite,
      adresse: req.body.adresse,
      tel: req.body.tel,
      cv: req.body.cv,
      
    });
    formateur
      .save()
      .then(result => {
        console.log(result);
        res.status(200).json({
          status: true,
          data: formateur,
      });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

  //getAll formateur 
  exports.getfindAll =  (req, res) => {
    Formateur.find({}).populate("formation").exec(function(err, formateurs) {
      if (err) {
        console.error("erreur");
      } else {
        
        res.json(formateurs);
      }
    });
  }
  
  exports.getById = (req, res) => {
    //let productId = req.params.productId;
    Formateur.findById({ _id: req.params.id })
        .then((formateur) => {
            res.status(200).send(formateur)
        })
        .catch((error) => { console.log(error) });
}

 exports.update = (req,res) => {
    Formateur.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          .then((formateur) => {
              res.status(200).send(formateur)
          })
          .catch((error) => { console.log(error) });
  }
  
  exports.delete = (req, res) => {
    Formateur.findOneAndDelete({ _id: req.params.id })
          .then((data) => {
              res.status(200).json("Deleted...")
          })
          .catch((error) => { console.log(error) });
  }