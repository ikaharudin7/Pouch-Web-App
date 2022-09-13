//const flash = require('express-flash')
//const session = require('express-session')

// Import express
const express = require('express')

// Set your app up as an express app
const app = express()


//require('./models')

//configure engine?

// Set up to handle POST requests
app.use(express.json()) // needed if POST data is in JSON format
app.use(express.urlencoded({ extended: false })) // only needed for URL-encoded input


// Flash messages for failed logins, and (possibly) other success/error messages
//app.use(flash())

// Track authenticated users through login sessions
/*app.use(
    session({
      // The secret used to sign session cookies (ADD ENV VAR)
        secret: process.env.SESSION_SECRET || 'keyboard cat',
        name: 'demo', // The cookie name (CHANGE THIS)
        saveUninitialized: false,
        resave: false,
        cookie: {
            sameSite: 'strict',
            httpOnly: true,
            secure: app.get('env') === 'production'
        },
    })
  )*/
  
  /*if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
  }*/
  
  // Initialise Passport.js
  //const passport = require('./passport')
  //app.use(passport.authenticate('session'));
  
  //const profile = require('./routes/profile');
  //app.use(profile)
  
  // Load authentication router
  //const authRouter = require('./routes/auth')
  //app.use(authRouter)
    
  
  app.use('/profile', require("./routes/profile"));
  
  //app.use('/', require("./routes/collection"));
  
  const PORT = process.env.PORT || 8080;
    
  app.listen(PORT, console.log(`Server started on port ${PORT}`));