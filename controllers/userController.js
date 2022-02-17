const User =require("../models/user");
const bcrypt=require("bcryptjs");
const jwt  = require("jsonwebtoken");
const config = require("../middleware/config");

 exports.signup = async (req, res) => {
    //checking if user email already exixts
    const emailExist = await User.findOne({email: req.body.email });
    if(emailExist) {
        res.status(400).send("Email already exists");
        return;
    }

    //hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    //on process of adding new user
    const user = new User({
        FirstName:   req.body.FirstName,             
        LastName:   req.body.LastName,  
        Email: req.body.Email,
        password: hashedPassword
    });
    const saveUser = await user.save();
    res.status(200).send("user created");
    res.json(saveUser);   
    
 };

//signin route
 exports.signin = async (req, res) => {
     User.findOne({ email: req.body.email })
     .then(user => {
       if (!user) {
         return res.status(401).json({ error: 'User not found!' });
       }
       bcrypt.compare(req.body.password, user.password)
         .then(valid => {
           if (!valid) {
             return res.status(401).json({ error: 'Wrong password !' });
           }
           
           res.status(200).json({
             user,
             token: jwt.sign({
               data: user,
           }, config.secretKey)          
           });
         })
         .catch(error => res.status(500).json({ error }));
     })
     .catch(error => res.status(500).json({ error }));
 };

