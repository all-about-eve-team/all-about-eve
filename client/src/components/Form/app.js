const nodemailer = require('nodemailer');
const xoath2 = require('xoath2');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        xoath2: xoath2.createXOAuth2Generator({
            user:'4allabouteve@gmail.com',
            clientId: '354434422011-604vgk2firkukq2gsjhfp7ledfrid9go.apps.googleusercontent.com',
            clientSecret: 'b4LjqH-DfJe0GfT6ULpSGD0i',
            refreshToken: ''
        })
    }
})
var mailOptions = {
    from: 'Saikal <7saikal@gmail.com>',
    to: 'Eve <4allabouteve@gmail.com',
    subject: 'Nodemailer test',
    text: 'Hello World!!'
}
transporter.sendMail(mailOptions, function (err,res) {
    if(err) {
        console.log('Error');
    } else {
        console.log('Email Sent');
    }
})