// Basic Setup
var http = require('http'), express = require('express');
parser = require('body-parser');
var fs = require('fs');

var https = require('https');

var options = {
	key : fs.readFileSync('/home/oracle/CA/214243098680862.key'),
	cert : fs.readFileSync('/home/oracle/CA/214243098680862.pem')
};

// Setup express
var app = express();
app.use(parser.json());
app.use(parser.urlencoded({
	extended : true
}));
app.set('port', process.env.PORT || 5000);
app.set('porthttps', process.env.PORT || 1443);

// Set default route
app.get('/', function(req, res) {
	res.send('<html><body><p>Welcome to Node https server </p></body></html>');
});

// Create server
http.createServer(app).listen(app.get('port'), function() {
	console.log('Server listening on port ' + app.get('port'));
});

// Create server
https.createServer(options, app).listen(app.get('porthttps'), function() {
	console.log('https Server listening on port ' + app.get('porthttps'));
});
