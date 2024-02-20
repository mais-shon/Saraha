import userModel from "../../../../DB/models/user.model.js";
import messageModel from "../../../../DB/models/message.model.js"
import { auth } from "../../../middleWare/auth.middleWare.js";

 export const sendMessage=async(req,res)=>{
    const {reciver_id}=req.params;
    const {message} =req.body;
    const user= await userModel.findById(reciver_id)
if(!user){
   return res.status(404).json({message:"user cant found"})
}
const reciveMessage=await messageModel.create({reciver_id,message})
return res.json(reciveMessage)
}

//get messages
export const getMessage=async(req,res)=>{
   const messages= await messageModel.find({reciver_id:req.id});
   return res.json(messages)
   
}
//delete message
export const deleteMessage=async(req,res)=>{
   const {id}=req.id;
   const {messageId}=req.params;
   const deleteMessage=await messageModel.deleteOne({_id:messageId,reciver_id:id})
   if(deleteMessage.deletedCount==0){
      return res.json({message:"message dosen't delete"})
   }
   return res.json({message:"message deleted successfuly"})
}