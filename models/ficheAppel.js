const{Schema, model} = require("mongoose");

const ficheAppelSchema = new Schema({
    date:{
       type:Date, required:true
    },
 
    groupe: [{
        type: Schema.Types.ObjectId,
        ref: 'Groupe',
        trim: true
        // require: true
      }],
      formation: [{
        type: Schema.Types.ObjectId,
        ref: 'Formation',
        trim: true
        // require: true
      }],

});
module.exports = model("FicheAppel", ficheAppelSchema);