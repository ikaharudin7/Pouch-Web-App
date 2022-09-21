// set up Passport
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user')


// Serialize information to be stored in session/cookie
passport.serializeUser((user, done) => {
    // Use id to serialize user
    done(undefined, user._id)
})

passport.deserializeUser((userId, done) => {
  User.findById(userId, { password: 0 }, (err, user) => {
    if (err) {
        return done(err, undefined)
    }
    return done(undefined, user)
  })  
})

User.find({}, (err, users) => {
  User.create({ username: 'abc', password: 'def', firstname: "Chris", lastname: "rock", email: "yikes"}, (err) => {
  if (err) { console.log(err); return; }
  console.log('Dummy user inserted')
  })
  console.log("here are the users", users)
})


// Set up "local" strategy, i.e. authentication based on username/password. There are other types of strategy too.


passport.use('user_strategy', new LocalStrategy(
  function (username, password, cb) {
    User.findOne({username: username}, function (err, user) {
      if (err) { return cb(null, false, { message: 'Unknown error.' }) }
      if (!user) { return cb(null, false, { message: 'Incorrect username.' }) }
      // if there is a user with this username, check if the password matches
      user.verifyPassword(password, (err, valid) => {
        if (err) {  return cb(null, false, { message: 'Unknown error.' }) }
        if (!valid) { return cb(null, false, { message: 'Incorrect password.' }) }
        console.log(user)
        return cb(null, user)
      })
    })
  }
))


module.exports = passport;