import bcrypt from 'bcrypt';
import userModel from '../../../../DB/models/user.model.js'
import { generateToken, verifyToken } from '../../../../services/generateAndVerify.js';
import { signInSchema, signUpSchema } from '../auth.validate.js';
import { sendEmail } from '../../../../services/sendEmail.js';

export const signUp=async(req,res)=>{
  
    const {email,password,userName}=req.body;
    const user= await userModel.findOne({email})
   if(user){
    return res.json({message:"email is exist"})
   }
   const hashPassword= bcrypt.hashSync(password,parseInt(process.env.SALTROUND))
   const token=generateToken({email},process.env.EMAIL_TOKEN)
   const link =`http://localhost:2000/auth/confirmEmail/${token}`;
  await sendEmail(email,'confirm email',`<a href="${link}"> vefiy your email</a>`);
  const createUser=await userModel.create({email,password:hashPassword,userName})

return res.status(201).json({message:"sucess",userId:createUser._id})
   

 
}
export const confirmEmail=async(req,res)=>{

 const {token}=req.params;
 const decoded=verifyToken(token,process.env.EMAIL_TOKEN)
 if(!decoded){
    return res.json({message:"this page not valid"})
 }
const user=await userModel.updateOne({email:decoded.email},{confirmEmail:true})
return res.redirect('http://www.facebook.com')
}
//signIn
export const signIn=async(req,res)=>{
   
    const {email,password}=req.body;
    const user= await userModel.findOne({email})
    if(!user){
        return res.status(401).json({message:"email not correct"})
    }
    const match=bcrypt.compareSync(password,user.password)
   if(!match){
    return res.json({message:"password not correct"})
   }
   const token =generateToken({id:user._id});
   return res.json({message:"sigIn is success",token})


    
    }
