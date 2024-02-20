const validation =(schema)=>{
return (req,res,next)=>{
    const validationResult=schema.validate(req.body,{abortEarly:false});
  if(validationResult.error){
    return res.json({message:"check your information",validationResult})
  }
   return next();
}
}
export default validation;