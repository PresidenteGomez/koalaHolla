var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require( 'path' );
var port = process.env.PORT || 5000;

//require routers
var indexRouter = require('../routes/index');
var koalasRouter = require('../routes/koalas' );

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

//routes
app.use('/', indexRouter); 
app.use('/koalas', koalasRouter);


// Start listening for requests on a specific port
app.listen(port, function(){
  console.log('listening on port', port);
});

