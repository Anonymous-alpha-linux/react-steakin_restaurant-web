///Core Module
const path = require('path');

//Third-party Module
const express = require('express');

///Router Initialization
const router = express.Router();


///Local module
const rootDir = require('../util/path');

router.get('/', (req, res, next) => {
 res.sendFile(path.join(rootDir, 'src', 'View', 'admin.html'))
})

router.get('/add-food', (req, res, next) => {
 res.sendFile(path.join(rootDir, "src", "View", "add-food.html"))
});

router.post('/add-food', (req, res, next) => {
 res.redirect('/');
})

module.exports = router;