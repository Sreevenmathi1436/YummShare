const jwt= require('jsonwebtoken');

const varifiedToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if(authHeader&& authHeader.startsWith('Bearer ')){
        token = authHeader.split(' ')[1];
        if(!token){
            return res.status(401).json({error: 'Unauthorized access, token not found'});
        }
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            console.log(" decoded User:", req.user)
            next();
        }
        catch(error){
            return res.status(40).json({error: 'tocken not valid'});
            }
        }else{
            return res.status(401).json({error: 'Unauthorized access, token not found'});
        }
}

//role middleware
const authorizerole=(...allowedrole)=>{
    return(req,res,next)=>{
        if(!allowedrole.includes(req.user?.role)){
            return res.status(403).json({message: 'Access denied',});
        }
        next();}
}




module.exports ={varifiedToken,authorizerole};