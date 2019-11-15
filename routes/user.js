const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('../passport')

router.post('/', (req, res) => {
    console.log('user signup');

    // const { username, password } = req.body
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const icon = req.body.icon;
    const age = req.body.age;
    console.log(username, password)
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                age: age,
                icon: icon,
                email: email
                // new stuff goes here! age:age
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    User.findOne({ username: username }, (err, user) => {
        console.log(user)
    if (req.user) {
        res.json({ user: user })
        console.log("user get route getting hit")
    } else {
        res.json({ user: null })
    }
})
})

// nora playing around with this route
router.get("/:name", (req,res)=>{
    console.log("guess what my wacky route is getting hit")
    User.findOne({username: req.params.name}, "_id")
    .then(dbModel => {
        res.json(dbModel)
        console.log(res.json(dbModel))
    })
    .catch(err => res.status(422).json(err));
})

router.put("/:id",(req,res)=>{
    console.log("here's my wacky put route")
    User.findOneAndUpdate({_id:req.params.id}, {$push: req.body }, { new: true })
    .then(dbModel=>{
        res.json(dbModel)
        console.log(res.json(dbModel))
    }).catch(err=> res.status(422).json(err))
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router