const express = require('express')
const router = express.Router()
const User = require('../../models/userModel')
const passport = require('../../passport')

// New User Sign Up
router.post('/signup', (req, res) => {
    console.log('user signup');

    const { email, password, name } = req.body
    console.log(req.body)
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the email: ${email}`
            })
        }
        else {
            console.log("else")
            const newUser = new User({
                name: name,
                email: email,
                password: password
            })
            console.log(newUser)
            newUser.save((err, savedUser) => {
                console.log(savedUser)
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

// User Login
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
            email: req.user.email
        };
        res.send(userInfo);
    }
)

// Returns the User as req.user
router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

// Logout User
router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router