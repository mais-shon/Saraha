import {verifyToken} from '../../services/generateAndVerify.js'
import userModel from '../../DB/models/user.model.js';

export const auth=async(req,res,next)=>{
    try{   
         const {authrization }=req.headers;
    if(!authrization?.startsWith(process.env.BEARERKEY)){
        return res.json({message:"invalid bearerKey"})
    }
 const token =authrization.split(process.env.BEARERKEY)[1];
 return res.json(token)
if(!token){
    return res.json({message:"invalid token"})
}
const decoded=verifyToken(token);
const authUser=await userModel.findById(decoded.id)
if(!authUser){
    return res.json({message:"user not define"})
}
req.id=decoded.id;
next();
    }
    catch(err){
        return res.json({message:"failed",error:err.stack})
    }
    
}
