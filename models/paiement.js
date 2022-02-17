const {Schema, model} = require("mongoose")

const paiementSchema = new Schema({
    
    montant:{
        type:Number, required:true
    },
    reste:{
        type:Number, required:true
    },
    date:{
        type:Date, required:true
    },

    etudiant: {
        type: Schema.Types.ObjectId,
        ref: 'Etudiant',
        trim: true
        // require: true
      } //one paiement
})

module.exports = model("Paiement", paiementSchema);


