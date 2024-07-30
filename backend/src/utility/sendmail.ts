import nodemailer from 'nodemailer';


export const sendMail = ()=>{
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      port:465,
      secure: true,
      auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASSWORD
      }
    });
    
    const mailOptions = {
      from: process.env.EMAIL_ID,
      to: 'aftab9670065@gmail.com',
      subject: 'Hello from Nodemailer!',
      text: 'Hello from Nodemailer!'
    };
  
    transporter.sendMail(mailOptions, (error:any, info:any) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}
