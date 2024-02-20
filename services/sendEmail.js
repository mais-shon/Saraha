
import nodemailer from "nodemailer";
 export async function sendEmail(email,subject,html){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        }
      });
      


  const info = await transporter.sendMail({
    from: `khnowledge academy " <${process.env.EMAIL}>`, // sender address
    to: email, // list of receivers
    subject, // Subject line
   
    html, // html body
  })};