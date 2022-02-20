const {Schema, model} = require("mongoose")

const ficheInscriptionSchema = new Schema({
    
    typeFormation:{
        type:String, required:true
    },
    theme:{
        type:String, required:true
    },
    date:{
        type:Date, required:true
    },

    etudiant: {
        type: Schema.Types.ObjectId,
        ref: 'Etudiant',
        trim: true
        // require: true
      }
      
})

module.exports = model("FicheInscription", ficheInscriptionSchema);