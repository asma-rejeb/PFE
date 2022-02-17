const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://haninebenslimene:123456789ha@cluster0.dehkx.mongodb.net/firstDB")
.then(db => console.log("db connected successfully"))
.catch(err => console.log("erreur"))
