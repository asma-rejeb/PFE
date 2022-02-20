const { format } = require("express/lib/response");
const FicheAppel =require("../models/ficheAppel");
//save
exports.saveFicheAppel = (req, res, next) => {
    const ficheAppel = new FicheAppel(
         req.body
   );
   ficheAppel
      .save()
      .then(result => {
        console.log(result);
        res.status(200).json({
          status: true,
          data: ficheAppel,
      });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  };

  //get all fichierAppel

  exports.getfindAll=  (req, res) => {
    FicheAppel.find({}).populate("groupe").exec(function(err, ficheAppels) {
      if (err) {
        console.error("erreur");
      } else {
        
        res.json(ficheAppels);
      }
    });
  }
  
  exports.getById= (req, res) => {
    //let productId = req.params.productId;
    FicheAppel.findById({ _id: req.params.id })
        .then((ficheAppel) => {
            res.status(200).send(ficheAppel)
        })
        .catch((error) => { console.log(error) });
}
;



 exports.update= (req,res) => {
  FicheAppel.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
          .then((ficheAppel) => {
              res.status(200).send(ficheAppel)
          })
          .catch((error) => { console.log(error) });
  }
  
  
  exports.deleteById = (req, res) => {
    FicheAppel.findOneAndDelete({ _id: req.params.id })
          .then((data) => {
              res.status(200).json("Deleted...")
          })
          .catch((error) => { console.log(error) });
  }
