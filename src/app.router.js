import connectDB from '../DB/connection.js'
import authRouter from './modules/auth/auth.router.js'
import userRouter from './modules/user/user.router.js'
import messageRouter from  './modules/message/message.router.js'
const initApp=(app,express)=>{
    connectDB()
    app.use(express.json())
    app.use('/auth',authRouter)
    app.use('/user',userRouter)
    app.use('/message',messageRouter)
}
 export default initApp;