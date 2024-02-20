import mongoose from 'mongoose'
 const connectDB=async()=>{

  return await  mongoose.connect(process.env.DB_ROUND)
  .then(()=>{
    console.log('connect to DB')
  })
  .catch((err)=>{
    console.log(`error to connect to database ${err}`)
  })
 }
 export default connectDB;