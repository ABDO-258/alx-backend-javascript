const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Link the route / to the AppController's getHomepage method
router.get('/', AppController.getHomepage);

// Link the route /students to the StudentsController's getAllStudents method
router.get('/students', StudentsController.getAllStudents);

// Link the route /students/:major to the StudentsController's getAllStudentsByMajor method
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;