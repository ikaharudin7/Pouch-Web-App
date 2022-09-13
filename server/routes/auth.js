const express = require('express')
const passport = require('passport')
const router = express.Router()

// Authentication middleware
const isAuthenticated = (req, res, next) => {
    // If user is not authenticated via passport, redirect to login page
    if (!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    // Otherwise, proceed to next middleware function
    return next()
}

// Main page which requires login to access
// Note use of authentication middleware here
router.get('/', isAuthenticated, (req, res) => {
    // link with react
    // instead of get /, maybe it is get home
    res.render('home', {req.user.toJSON()})
});


// Login page (with failure message displayed upon login failure)
router.get('/login', (req, res) => {
    // link with react
    res.render('login')
})

// Handle login
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/:userid',
        failureRedirect: '/login',
        failureFlash: true
    })
);

// Handle logout
router.post('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
});

module.exports = router
