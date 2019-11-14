const nodemailer = require('nodemailer');
const xoath2 = require('xoath2');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        xoath2: xoath2.createXOAuth2Generator({
            user:'4allabouteve@gmail.com',
            clientId: '662007221584-m4krcam1i57gee0mbl1fdc1l6db5nn2c.apps.googleusercontent.com',
            clientSecret: 'JShVEzfymqyqpucVZ0ZkXR6a',
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