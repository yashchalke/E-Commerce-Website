const User = require('../db/Models/User');
const bcrypt = require('bcrypt')

const RegisterUser = async (req,res)=>{
    try{
        const {username,Email,Password,role} = req.body;
        const checkexistinguser = await User.findOne({username});
        if(checkexistinguser){
            res.status(400).json({
                status : false,
                message : "User Already Exist!!!"
            });
        }
            const salt = await bcrypt.genSalt(10);
            const hashedpassword = await bcrypt.hash(Password,salt);

            const newUser = new User({
                username : username,
                Email : Email,
                Password : hashedpassword,
                role : role || 'user'
            });

            await newUser.save();
            if(newUser){
                res.status(201).json({
                    Success : true,
                    message : "new user registered Successfully!!!",
                    data : newUser
                });
            }
            else{
                res.status(400).json({
                    Success : false,
                    message : "Something Went Wrong!!!!",
                    data : newUser
                });
            }
        }
        
    catch(err){
        console.log("Error Occurred While Registering a new user" , err);
        res.status(400).json({
            success : false,
            message : "Registration Failed !!!",
            Reason : err
        });
    }
}
const LoginUser = async ()=>{

}

module.exports = {RegisterUser,LoginUser}