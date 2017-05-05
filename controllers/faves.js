// when user clicks button, add to faves
// send content, title to favorites
// send quote # and user # to userFaves table
//////POST

// on profile page: display quote. display author
////// GET
// on profile page: delete button. delete assoc from db
////// DELETE

// Require and global variables
var express = require('express');
var passport = require('../config/passportConfig');
var db = require('../models');
var router = express.Router();

// Routes

// add quote to db
router.post('/', function(req, res) {
    db.userfave.findOrCreate({
        where: {
            quoteId: req.body.quoteId
        }
    }).spread(function(fave, wasCreated) {
        db.user.findbyId(req.user.id)
            .then(function(user) {
                user.addFavorite
            })
    })
})

// Export
module.exports = router;
