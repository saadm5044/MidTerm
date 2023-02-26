let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET Home page. */
router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET Home page. */
router.get('/about', indexController.displayAboutPage);

/* GET Home page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Home page. */
router.get('/services', indexController.displayServicesPage);

/* GET Home page. */
router.get('/contact', indexController.displayContactPage);

/* Get Router for displaying the login page */
router.get('/login', indexController.displayLoginPage);

/* Post Router for processing the login page */
router.post('/login', indexController.processLoginPage);

/* Get Router for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* Post Router for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* Get to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
