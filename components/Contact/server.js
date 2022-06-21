
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

const { sendEmail } = require('./mail');


app.post("/api/sendMail", (req, res) => {

    console.log(req.body)
    sendEmail(req.body.email, req.body.name, "hello")

})


app.listen(5000,  () => {
    console.log( "Server Running at 5000 ");
})

// const express = require('express');
// const nodemailer = require('nodemailer');
// const cors = require('cors');
// require("dotenv").config();

// const transporter = nodemailer.createTransport({
//     host: "mail.apgitsolutions.com", //replace with your email provider
//     port: 2525,
//     auth: {
//       user: 'jregencia@apgitsolutions.com',
//       pass: 'PcidE#0v=9KP'
//     }
//   });
//   ransporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

//   app.post('/send', (req, res, next) => {
//     // var name = req.body.name
//     // var email = req.body.email
//     // var subject = req.body.subject
//     // var message = req.body.message

//     var name = 'John'
//     var email ='jregencia@apgitsolutions.com'
//     var subject = 'Test'
//     var message = 'Test Message'
  
  
//     var mail = {
//       from: name,
//       to: 'johnchikoy19@gmail.com',
//       subject: subject,
//       text: message
//     }
  
//     transporter.sendMail(mail, (err, data) => {
//       if (err) {
//         res.json({
//           status: 'fail'
//         })
//       } else {
//         res.json({
//          status: 'success'
//         })
//       }
//     })
//   })

