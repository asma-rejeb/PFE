const {Schema, model} = require("mongoose")

const groupeSchema = new Schema({
    nom:{
        type:String, required:true
    },
    niveauFormation:{
        type:String, required:true
    },
    nbEtudiant:{
        type:Number, required:true
    },
    typeFormation:{
        type:String, required:true
    },
   
    etudiant: {
        type: Schema.Types.ObjectId,
        ref: 'Etudiant',
        trim: true
        // require: true
      }
});

module.exports = model("Groupe", groupeSchema);