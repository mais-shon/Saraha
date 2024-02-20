import  dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import initApp from './src/app.router.js'

const app= express();
const  PORT=2000;
app.use(express.json());
initApp(app,express);

app.listen(PORT,()=>{
    console.log(` server is running in port ${PORT}`)
})