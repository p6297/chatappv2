const User = require("../models/Usermodel");
const bcrypt = require("bcryptjs");

 const get_Register =async(req,res) => {
    try {
        res.render("register");
        
    } catch (error) {
        console.log(error);
        
    }

} 

const post_Register = async(req,res) => {
try {

    const hashPassword = await bcrypt.hash(req.body.password,10);

    const user = new User ({
        name: req.body.name,
        email:req.body.email,
        img:"/images"+req.file.filename,
        password:hashPassword
    })
    await user.save();
    res.render("register",{message:"Your Registration has been completed succesfully!"})
    
} catch (error) {
    console.log(error);
    
}
} 




module.exports = {
    get_Register,
    post_Register
}