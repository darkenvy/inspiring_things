//Require and global variables
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();

// Routes

router.get('/login', function(req, res) {
    res.render('loginform');
});

router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    successFlash: 'You are logged in.',
    failureRedirect: '/auth/login',
    failureFlash: 'Uh oh, something went wrong. Please try again.'
}));

router.get('/signup', function(req, res, next) {
    db.user.findOrCreate({
        where: { email: req.body.email },
        defaults: {
            'firstName': req.body.firstName,
            'password': req.body.password
        }
    }).spread(function(user, wasCreate) {
        if (wasCreated) {
            passport.authenticate('local', {
                successRedirect: '/profile',
                successFlash: 'Account created, and you have logged in.',
                failureRedirect: '/login',
                failureFlash: 'Uh oh, something went wrong. Please try again.'
            })(req, res, next)
        } else {
            req.flash('error', 'That email already exists in our system. Please try logging in.'),
                res.redirect('/auth/login');
        }
    }).catch(function(error) {
        req.flash('error', error.message);
        res.redirect('/auth/signup');
    })
});

// Facebook Auth
router.get('/facebook', passport.authenticate('facebook', {
    scope: ['public profile', 'email']
}));

router.get('/callback/facebook', passport.authenticate('facebook', {
    successRedirect: '/profile',
    successFlash: 'You have logged in using Facebook',
    failureRedirect: '/auth/login',
    failureFlash: 'Uh oh, something went wrong. Please try again.'
}));

// Export
module.exports = router;
