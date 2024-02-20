import userModel from "../../../../DB/models/user.model.js";


export const profilePic=async(req,res)=>{
if(!req.file){
    return res.json({message:"please enter your picture"})
}
const imageUrl=req.file.destination+"/"+req.file.filename;
const user=await userModel.update({_id:req.id},{profilePic:imageUrl})
return res.status(200).json({message:"profile update successfuly"})
}