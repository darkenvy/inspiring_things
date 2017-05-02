// All requires and global variables
require('dotenv').config();
var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = require('./config/passportConfig');
var app = express();
var path = require('path');
var isLoggedIn = require('./middleware/isLoggedIn');
var db = require('./models');

// Set and Use Statments

app.set('view engine', 'ejs');
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next();
})

// Routes

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile');
});


// req.user? -- isLoggedIn

// app.get('/:id', isLoggedIn, function(req, res) {
//     db.user.find({
//         where: { email: req.params.email }
//     }).then(function(user) {
//         if (!user) throw Error();
//         res.render('profile', { user: user });
//     }).catch(function(error) {
//         res.status(400);
//     });
// });

// app.get('/profile', isLoggedIn, function(req, res) {
//     res.render('profile', user);
// });


// Controllers
app.use('/auth', require('./controllers/auth'));

// Listen
app.listen(3000);
