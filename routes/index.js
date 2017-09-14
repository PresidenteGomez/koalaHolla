var router = require('express').Router();
var path = require('path');

router.get('/', function (req, res) {
    var indexPath = path.join(__dirname, '../server/public/index.html' );
    console.log('index path -->', indexPath);
    res.sendFile(indexPath);
});

module.exports = router;
