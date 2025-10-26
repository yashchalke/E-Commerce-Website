const User = require('../db/Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
            const payload = {UserId: {id: newUser._id},role:newUser.role};
            const token = jwt.sign(payload, process.env.JWT_SECRET , {expiresIn:"1d"});
                          
            if(newUser){
                res.status(201).json({
                    Success : true,
                    message : "new user registered Successfully!!!",
                    data : newUser,
                    token: token
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
const LoginUser = async (req,res)=>{
    try{
    const {username,Password} = req.body;
    const checkuser = await User.findOne({username});
    if(!checkuser){
        res.status(400).json({
            Success : false,
            message : "User is not Registered!!"
        });
    }
    
    const validateuser = await bcrypt.compare(Password,checkuser.Password);

    if(!validateuser){
        res.status(400).json({
            Success : false,
            Message : "Invalid Password!! Try Again.."
        });
    }
    else{
        const payload = {userId: {id:checkuser._id},role:checkuser.role,username:checkuser.username};
        const token = await jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"1d"});
         res.status(200).json({
            Success : true,
            Message : "Login Successful",
            details : checkuser,
            token:token
        });
    }
}
catch(err){
    console.log("Something went Wrong:" , err);
    res.status(400).json({
            Success : false,
            Message : "Something Went Wrong..."
        });
}
}

module.exports = {RegisterUser,LoginUser}