const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");
const { User } = require("../models");
const postsController = require ("../controllers/postsController.js")

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/username and password


passport.use(
  new LocalStrategy(
    // Our user will sign in using an username, rather than a "username"
    {
      usernameField: "username"
    },
    (username, password, done) => {
      // When a user tries to sign in this code runs
      console.log("username", username)
      db.User.findOne({
        // where: {
          username: username
        // }
      }).then(dbUser => {
        // If there's no user with the given username
        console.log("dbUser", dbUser)
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect username."
          });
        }
        // If there is a user with the given username, but the password the user gives us is incorrect
        // else if (!dbUser.validPassword(password)) {
          else if (dbUser.password !== password){
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
