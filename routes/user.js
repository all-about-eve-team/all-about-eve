const express = require('express')
const router = express.Router()
const User = require('../models/user')
const passport = require('../passport')

router.post('/', (req, res) => {
    const {username, password, email, icon, age} = req.body

    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
                // ideally would also have frontend validation
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                age: age,
                icon: icon,
                email: email
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
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    User.findOne({ username: username }, (err, user) => {
    if (req.user) {
        res.json({ user: user })
    } else {
        res.json({ user: null })
    }
})
})

router.put("/:id",(req,res)=>{
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
        // need to redirect on logout
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router