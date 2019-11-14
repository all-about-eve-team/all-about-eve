const nodemailer = require('nodemailer');
const xoath2 = require('xoath2');

var transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        xoath2: xoath2.createXOAuth2Generator({
            user:'4allabouteve@gmail.com',
            clientId: '662007221584-m4krcam1i57gee0mbl1fdc1l6db5nn2c.apps.googleusercontent.com',
            clientSecret: 'JShVEzfymqyqpucVZ0ZkXR6a',
            refreshToken: '1//04JDgH9Y1KakfCgYIARAAGAQSNwF-L9Ir45JDZrARsckNpcc4fFbomE_gjL0P4Bgd8IBbYfWcGfqy5uGK7t0TqQEchTygjbRRSQo',
            accessToken: "ya29.Il-xB1p6f6nKYDHIZILr09ewaLc6Q297YJS95fxaPi0FySBvKnXAQf5lEuWf19lmg_CHWEQLA8s5zayvjdRB7xoBJifwHCLpRjhwo85zZDMceHnaNhmoSqZI01JgKCZZZg"
        })
    }
})
var mailOptions = {
    from: 'Eve <4allabouteve@gmail.com>',
    to: 'Saikal <7saikal@gmail.com>',
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