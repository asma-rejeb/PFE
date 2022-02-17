const{Schema, model} = require("mongoose");

const userSchema = new Schema({
    FirstName:{
        type:String, required:true
    },
    LastName:{
        type:String, required:true
    },
    Email:{
        type:String, required:true
    },
    password:{
        type:String, required:true
    },

});
module.exports = model("User", userSchema);