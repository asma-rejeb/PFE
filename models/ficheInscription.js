const {Schema, model} = require("mongoose")

const ficheInscriptionSchema = new Schema({
    situationAct:{
        type:String, required:true
    },
    cinEtudiant:{
        type:String, required:true
    },
    civil:{
        type:String, required:true
    },
    nom:{
        type:String, required:true
    },
    prenom:{
        type:String, required:true
    },
    nationalite:{
        type:String, required:true
    },
    facebook:{
        type:String, required:true
    },
    typeFormation:{
        type:String, required:true
    },
    theme:{
        type:String, required:true
    },
    date:{
        type:String, required:true
    },

    etudiant: {
        type: Schema.Types.ObjectId,
        ref: 'Etudiant',
        trim: true
        // require: true
      }
})

module.exports = model("FicheInscription", ficheInscriptionSchema);