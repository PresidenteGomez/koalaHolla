//requires

var router = require('express').Router();
var pool = require('../modules/pool');

router.get('/', function (req, res) {
    console.log('we are in get koalas route');
    pool.connect(function (connnectionError, client, done) {
        if (connnectionError) {
            console.log(connnectionError);
            res.sendStatus(500);
        }
        else {
            client.query('SELECT * FROM koala_holla;', function (queryError, resultObj) {
                //done();//activate after connection error and client
            if (queryError){
                console.log(connnectionError);
                res.sendStatus(500);
            } else {
                console.log('resultObj.rows -->', resultObj.rows);
                res.send(resultObj.rows);
            }
            });
        }
    })
});

router.post('/', function (req, res) {
    var newKoala = req.body.name;
    console.log('in post koalas route', newKoala);
    res.sendStatus(201);
});

module.exports = router;