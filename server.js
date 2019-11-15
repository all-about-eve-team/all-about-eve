require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const nodemailer=require('nodemailer');
const oauth2=require('oauth2');
const mongoose = require('mongoose');
const session = require('express-session');
const dbConnection = require('./connection');
const MongoStore = require('connect-mongo')(session);
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 8080;
// Route requires
const user = require('./routes/user');
const api = require('./routes/api');

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json())

//Mongoose DB Connection
mongoose.Promise = global.Promise

// Sessions
app.use(
    session({
        secret: 'flooble-smurf', //pick a random string to make the hash that is generated secure
        store: new MongoStore({ mongooseConnection: dbConnection }),
        resave: false, //required
        saveUninitialized: false //required
    })
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.use(express.static(path.join(__dirname, "client", "build")))
// Routes

app.use('/user', user);
app.use('/api', api);
app.post("/api/mail", (req, res)=>{
    console.log("email route hit");
    console.log(req.body);
    var transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
            auth:{
                type:'OAuth2',
                user:process.env.User,
                clientId: process.env.clientId,
                clientSecret: process.env.clientSecret,
                refreshToken: process.env.refreshToken,
                accessToken: process.env.accessToken
            },
            tls:{
                rejectUnauthorized: false
            }
        })
    var mailOptions = {
        // from: 'Eve <4allabouteve@gmail.com>',
        from: req.body.email,
        to:'Eve <4allabouteve@gmail.com>',
        subject:"All About Eve User Comment",
        // text: 'Hello World!!'
        text:"Request from: " + req.body.name + " //Company Name: " + req.body.company +  " //User Email: " + req.body.email + "  //message: " + req.body.message
    }
    transporter.sendMail(mailOptions, function (err,res) {
        if(err) {
            console.log('Error');
            console.log(err)
        } else {
            console.log('Email Sent');
        }
    })
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
// Starting Server 
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`)
})
