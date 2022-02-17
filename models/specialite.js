const {Schema, model} = require("mongoose")

const specialiteSchema = new Schema({
    
    designation:{
        type:String, required:true
    },
    niv:{
        niveau :{
            type:String, required:true
        },
        sousNiveau :{
            type:String, required:true
        },
    },

    
    formation: {
        type: Schema.Types.ObjectId,
        ref: 'Formation',
        trim: true
        // require: true
      } 
})

module.exports = model("Specialite", specialiteSchema);