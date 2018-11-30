var http = require('http');
const https = require('https');
var url = require('url');
const path = require('path');
const express = require('express');
const app = express();  

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '')));

app.get('/', function (req, res) {
	var mapsParams = getMapsParameters(res);
	console.log(mapsParams);
});

http.createServer(app).listen(8080, function(){
    console.log('HTTP server listening on port 8080');
});

function getMapsParameters(res) {
	var params = [];

    params.address = '197 rue Nationale Lille France';
    params.key = 'AIzaSyB2OyDZO1DKuqxAjCzARYC7LMltqiMxftc';

    params.address = params.address.replaceAll(' ','+');

    https.get('https://maps.googleapis.com/maps/api/geocode/json?address='+params.address+'&key='+params.key, (resp) => {
  			var data = '';

  			// A chunk of data has been recieved.
  			resp.on('data', (chunk) => {
    			data += chunk;
  			});

	  		// The whole response has been received. Print out the result.
	  		resp.on('end', () => {
	  			var jsonParsed = JSON.parse(data);
	  			var lat = jsonParsed.results[0].geometry.location.lat;
	  			var lng = jsonParsed.results[0].geometry.location.lng;
				res.render(__dirname + "/views/maps.html", {lat:lat,lng:lng});
		  	});

			}).on("error", (err) => {
			  console.log("Error: " + err.message);
			  server.close();
			});

}