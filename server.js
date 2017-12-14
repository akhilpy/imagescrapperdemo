const express = require('express'),
    http = require('http'),
    path = require('path');
const app = module.exports = express();
const fileUpload = require('express-fileupload');
const ErrorHandler = require('./app/handlers/ErrorHandler');
const errorHandler = new ErrorHandler().errorHandler;
const bodyParser = require('body-parser');
const routes = require('./app/route/routes');


app.use('/', express.static(path.join(__dirname, 'app')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(fileUpload());

//  Connect all our routes to our application
app.use('/', routes);


//Global error handler.
app.use(errorHandler);
/**
* Start Server
*/
http.createServer(app).listen(8080, function () {
    console.log('Server listening on port ' + 8080);
});

