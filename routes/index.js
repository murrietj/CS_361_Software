var express = require('express');
var router = express.Router();

// Home Page
router.get('/', function(req, res){
    res.render('index');
});

module.exports = router;