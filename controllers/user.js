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

exports.signUp = (req, res) => {

    const {name, email, password} = req.body;
    console.log(email);

    if(isstringinvalid(name)|| isstringinvalid(email) || isstringinvalid(password))  {
        console.log("Okay done")
        return res.status(400).json({err: "Bad parameters... something is missing"});
    }

    const saltrounds = 10;

    bcrypt.hash(password, saltrounds, async (err, hash)=> {
        console.log(err);
        await User.create({name: name, email: email, password: hash})
        res.status(200).json({message: "User create successfully"});
    })

    

}