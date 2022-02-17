const{Schema, model} = require("mongoose");

const formateurSchema = new Schema({
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
    civilite:{
        type:String, required:true
    },
    adresse:{
        type:String, required:true
    },
    tel:{
        type:Number, required:true
    },
    cv:{
        type:String,
    },

    formation: {
        type: Schema.Types.ObjectId,
        ref: 'Formation',
        trim: true
        // require: true
      }

});
module.exports = model("Formateur", formateurSchema);