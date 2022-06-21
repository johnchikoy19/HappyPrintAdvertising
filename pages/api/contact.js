// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



export default function handler(req, res) {

    
    // res.status(200).json({ name: 'John Doe' })
    // const maildata = req.body.dataTosubmit

//      if (req.method === 'POST') {
//         const name = req.body.name
//         const email = req.body.email
       
//    res.status(200).json({ name: 'John Doe' })
//     }

     if (req.method === 'POST') {
        // const name = req.body.name
        // const email = req.body.email

        // const express = require('express');
        const nodemailer = require('nodemailer');
        // const cors = require('cors');
        // require("dotenv").config();

        
        
const transporter = nodemailer.createTransport({
    name: 'johnchikoy19@gmail.com', // <= Add this
    host: 'smtp.gmail.com', //replace with your email provider
    port: 465,
    auth: {
      user: 'johnchikoy19@gmail.com',
      pass:  'rizajanine27@'
    },
    secure: true,
    logger: true,
    debug: true
  

  });
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

    var from = 'johnchikoy19@gmail.com'
    var email ='jregencia@apgitsolutions.com'
    var subject = 'Test'
    var message = 'Test Message'
  

    const mailData = {
        from: from,
        to: email,
        subject: subject,
        // text: message,
        html: <html>
        <body>{message}</body></html>
       }
  
    // var mail = {
    //   from: name,
    //   to: email,
    //   subject: subject,
    //   text: message
    // }
  
    transporter.sendMail(mailData, (err, data) => {
      if (err) {
        res.json({
          status: 'fail', e
        })
        console.log(err)
      } else {
        res.json({
         status: 'success'
        })
      }
    })
    res.status(200)
 

}
}
  