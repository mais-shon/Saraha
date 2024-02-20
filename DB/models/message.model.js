import  mongoose,{Types,model,Schema} from 'mongoose'

 const messageSchema=new Schema({
    message:{
        type:String,
        required:true
    },
    reciver_id:{
        type:Types.ObjectId,
        required:true,
        ref:'User'
    }
 },{
 timestamps:true})
  
 const messageModel= mongoose.models.Message||model ('Message',messageSchema)
 export default messageModel;