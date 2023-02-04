const User = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

function isstringinvalid(string){
    if(string == undefined || string.length === 0){
        return true
    } else {
        return false;
    }
}

exports.signUp = async (req, res) => {

    try {

    const {name, email, password} = req.body;
    // console.log(email);

    if(isstringinvalid(name)|| isstringinvalid(email) || isstringinvalid(password))  {
        console.log("Okay done")
        return res.status(400).json({err: "Bad parameters... something is missing"});
    }

    const saltrounds = 10;

        const users = await User.findAll({where: {email}}); // this calls the users from database through email

        if(users.length > 0){  // we are counting the length here that how many users are here

            return res.status(404).json({success: false ,message: "User already exist"});  // it returns that the user is already exist

        }
        else{
        
            bcrypt.hash(password, saltrounds, async (err, hash)=> {   // here we are encrypting the password of the user

                console.log(err);
                await User.create({name: name, email: email, password: hash})
                res.status(200).json({success: true, message: "User create successfully"});
                
            }) 
        }
    }

    catch(err){
        res.status(500).json(err);
    }

}