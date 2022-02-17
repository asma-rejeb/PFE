const{Schema, model} = require("mongoose");

const etudiantSchema = new Schema({
    cin:{
        type:String, required:true
    },
    nom:{
        type:String, required:true
    },
    prenom:{
        type:String, required:true
    },
    password:{
        type:String, required:true
    },
    email:{
        type:String, required:true
    },
    niveauScolaire:{
        type:String, required:true
    },
    tel:{
        type:Number, required:true
    },
    civilite:{
        type:String, required:true
    },
    nationalite:{
        type:String, required:true
    },
    facebook:{
        type:String, required:true
    },
    paiement:{
        type:Boolean, required:true
    },

    paiement: [{
        type: Schema.Types.ObjectId,
        ref: 'Paiement',
        trim: true
        // require: true
      }] //tableau pour many
});

module.exports = model("Etudiant", etudiantSchema);