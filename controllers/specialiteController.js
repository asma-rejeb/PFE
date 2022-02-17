const Specialite =require("../models/specialite");

exports.saveSpecialite = (req, res, next) => {
  

    const specialite = new Specialite({
      designation: req.body.designation,
      niveau: req.body.niveau,
     
    });

    specialite
    .save()
    .then(result => {
      console.log(result);
      res.status(200).json({
        status: true,
        data: specialite,
    });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

  //getAll specialite 
  exports.getfindAll =  (req, res) => {
    Specialite.find({}).populate("formation").exec(function(err, specialites) {
      if (err) {
        console.error("erreur");
      } else {
        
        res.json(specialites);
      }
    });
  }

  exports.getById = (req, res) => {
    //let productId = req.params.productId;
    Specialite.findById({ _id: req.params.id })
        .then((specialite) => {
            res.status(200).send(specialite)
        })
        .catch((error) => { console.log(error) });
}

exports.update = (req,res) => {
    Specialite.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          .then((specialite) => {
              res.status(200).send(specialite)
          })
          .catch((error) => { console.log(error) });
  }

  exports.delete = (req, res) => {
    Specialite.findOneAndDelete({ _id: req.params.id })
          .then((data) => {
              res.status(200).json("Deleted...")
          })
          .catch((error) => { console.log(error) });
  }