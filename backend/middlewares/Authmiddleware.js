{/*Creating User and authentication middleware here... */}

const jwt = require("jsonwebtoken");
require('dotenv').config()

const AuthMiddleware = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        res.status(400).json({
            success : false,
            message : "You are not Logged in"
        })
    }

    try{
        const decodedtoken = jwt.verify(token,process.env.JWT_SECRET);
        req.userInfo = decodedtoken;
        next();
    }
    catch(err){
         console.log(err);
        res.status(400).json({
            success : false,
            message : "You are not Logged in"
        });

    }
}

module.exports = AuthMiddleware


