const {Schema, model} = require("mongoose")

const formationSchema = new Schema({
    titre:{
        type:String, required:true
    },
    specialite:{
        type:String, required:true
    },
    type:{
        type:String, required:true
    },
    niveau:{
        type:String, required:true
    },
    dateDebut:{
        type:String, required:true
    },
    dateFin:{
        type:String, required:true
    },
    horaire:{
        type:String, required:true
    },
    duree:{
        nbrHeurTotal :{
            type:Number, required:true
        },
        nbrHrParJour :{
            type:Number, required:true
        },
    },
    prix:{
        type:Number, required:true
    },
    nbrStagiaire:{
        type:Number, required:true
    },

    formateur: {
        type: Schema.Types.ObjectId,
        ref: 'Formateur',
        trim: true
        // require: true
      },
      specialite: [{
        type: Schema.Types.ObjectId,
        ref: 'Specialite',
        trim: true
        // require: true
      }]
})

module.exports = model("Formation", formationSchema);

