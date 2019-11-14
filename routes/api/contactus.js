const router = require("express").Router();
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user:'4allabouteve@gmail.com',
            clientId: '354434422011-604vgk2firkukq2gsjhfp7ledfrid9go.apps.googleusercontent.com',
            clientSecret: 'b4LjqH-DfJe0GfT6ULpSGD0i',
            refreshToken: ''
        })
    }
})
var mailOptions = {
    from: 'Saikal <7saikal@gmail.com>',
    to: 'Eve <4allabouteve@gmail.com>',
    subject: 'Nodemailer test',
    text: 'Hello World!!'
}


// /api/contactus/
router.route("/")
  .post(function(req, res){
      //gmail staff here
      transporter.sendMail(mailOptions, function (err,res) {
        if(err) {
            console.log('Error', err);
        } else {
            console.log('Email Sent');
        }
    })
      res.end()
  });


module.exports = router;