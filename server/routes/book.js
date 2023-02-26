let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require("passport");

let bookController = require('../controllers/book');

// helper function for guard purposes
function requireAuth(req, res, next) {
    // check if the user is logged in
    if (!req.isAuthenticated()) 
    {
      return res.redirect("/login");
    }
    next();
  }
  

/* Get Router for the Book list page - Read Operation*/
router.get('/', bookController.displayBookList);

/* Get Router for displaying the Add page - CREATE Operation*/
router.get('/add', requireAuth, bookController.displayAddPage);

/* Post Router for processing the Add page - CREATE Operation*/
router.post('/add', requireAuth, bookController.processAddPage);

/* Get Router for displaying the Edit page - UPDATE Operation*/
router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* Post Router for processing the Edit page - UPDATE Operation*/
router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* Get to perform deletion - DELETE Operation*/
router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;