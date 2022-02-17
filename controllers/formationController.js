const Formation =require("../models/formation");

exports.saveFormation = (req, res, next) => {
  

    const formation = new Formation(
         req.body
   );
    formation
      .save()
      .then(result => {
        console.log(result);
        res.status(200).json({
          status: true,
          data: formation,
      });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

  //get all formation

  exports.findAll=  (req, res) => {
    Formation.find({}).populate("formateur").exec(function(err, formations) {
      if (err) {
        console.error("erreur");
      } else {
        
        res.json(formations);
      }
    });
  }
  exports.getById = (req, res) => {
    //let productId = req.params.productId;
    Formation.findById({ _id: req.params.id })
        .then((formation) => {
            res.status(200).send(formation)
        })
        .catch((error) => { console.log(error) });
}

 exports.update = (req,res) => {
    Formation.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          .then((formation) => {
              res.status(200).send(formation)
          })
          .catch((error) => { console.log(error) });
  }
  
  exports.delete = (req, res) => {
    Formation.findOneAndDelete({ _id: req.params.id })
          .then((data) => {
              res.status(200).json("Deleted...")
          })
          .catch((error) => { console.log(error) });
  }