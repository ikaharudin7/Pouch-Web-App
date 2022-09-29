const express = require('express')
const passport = require('passport')
const router = express.Router()

// Authentication middleware
const isAuthenticated = (req, res, next) => {
    // If user is not authenticated via passport, redirect to login page
    if (!req.isAuthenticated()) {
        return res.redirect('http://localhost:3000/login')
    }
    // Otherwise, proceed to next middleware function
    return next()
}

// Main page which requires login to access
// Note use of authentication middleware here
router.get('/profile', isAuthenticated, (req, res) => {
    // link with react
    // instead of get /, maybe it is get home
    res.send({user: req.user.toJSON()});
});


// Login page (with failure message displayed upon login failure)
router.get('/', (req, res) => {
    // link with react
    res.send("login load")
})

// Handle login
router.post('/', (req, res) => {
    passport.authenticate('local', {
        successRedirect: 'http://localhost:3000/profile',
        failureRedirect: 'http://localhost:3000/login',
        failureFlash: true
    }) 
    console.log("loose")}
);

// Handle logout
router.post('/logout', (req, res) => {
    req.logout()
    res.redirect('http://localhost:3000/')
});

module.exports = router