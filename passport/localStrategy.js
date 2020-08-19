const User = require('../models/userModel')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
	{
		usernameField: 'email' // not necessary, DEFAULT
	},
	function(email, password, done) {
        console.log("Passport Local")
		User.findOne({ email: email }, (err, user) => {
            console.log("LOCAL STRATEGY")
            console.log(user)
            console.log(err)
			if (err) {
				return done(err)
			}
			if (!user) {
				return done(null, false, { message: 'Incorrect email' })
			}
			if (!user.checkPassword(password)) {
				return done(null, false, { message: 'Incorrect password' })
			}
			return done(null, user)
		})
	}
)

module.exports = strategy