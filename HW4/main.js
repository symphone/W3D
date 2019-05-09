var shelljs = require('shelljs');
var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/game.html');
});

app.get ('/api', function (req, res) {

	console.log (req.query);  // { v: [ '1', '1', '2' ] }
	//console.log (req.query.v); // [ '1', '1', '2' ]

	var obj = req.query.obj;
	
	shelljs.exec('main.exe ' + obj[0] + ' ' + obj[1] + ' ' + obj[2] + ' ' + obj[3] + ' ' + obj[4] + ' ' + obj[5] + ' ' + obj[6], 
		
		function(status, output) { 
		  console.log('Exit status:', status);
		  console.log('Exit output:', output);
		  
		  var output = {
			status: status,
			output: output
		  };

      /*
         The response header for supporting CORS:
         "Access-Control-Allow-Origin": "*",
         "Access-Control-Allow-Headers": "Content-Type"
	*/      

	  	  res.writeHead(200, {
		  	"Content-Type": "application/json",
          	"Access-Control-Allow-Origin": "*",
          	"Access-Control-Allow-Headers": "Content-Type"
	  	  });
	
	  	  res.write( JSON.stringify(output) );
	      res.end();

	});
});


// or simply
// app.listen (1337); 
// will do

var server = app.listen (1337, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log ('server started on http://' + host + ':' + port);
});

