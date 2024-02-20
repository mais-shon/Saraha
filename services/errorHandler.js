export const asyncHandler=(fun)=>{
return (req,res)=>{
    fun(req,res).catch(err=>{
        return res.json({message:"failed",error:err.stack})
    })
}
}