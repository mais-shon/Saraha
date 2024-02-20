import multer from "multer";
import { nanoid } from "nanoid";
export const HME=(wrr,req,res,next)=>{
    if(err){
        return res.state(400).json({message:"there is an err",err})
    }
    next()
}
function findUpload(){

    const storage=multer.diskStorage({
destination:(req,res,cb)=>{
   
    cb(null,'uploads')
},
filename:(req,file,cb)=>{
cb(null,nanoid() + file.originalname)
}


    })
    function fileFilter(req,file,cb){
        if(file.mimetype=='image/jpeg'||file.mimetype=='image/png'||file.mimetype=='image/gif'){
        cb(null,true)

        }
        cb("invalid formate",false)
    }
    const upload=multer({fileFilter,storage})
    return upload
}
export default findUpload;