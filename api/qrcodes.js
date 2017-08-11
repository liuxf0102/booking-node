var express = require('express');
var router = express.Router();


var urlQR = 'https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=';
router.post('/', function(req, res) {
	if (typeof req.body.accessToken !== 'undefined'	) {
		
		var accessToken = req.body.accessToken;
		console.log("accessToken:"+accessToken);

		
		var fs = require("fs");
		// Example POST method invocation
		var RestClient = require('node-rest-client').Client;

		var restClient = new RestClient();

		// set content-type header and data as json in args parameter
		var args = {
			data : {
				scene : 7,
				path : "pages/index/index?query=1",
				width : 230

			},
			headers : {
				"Content-Type" : "application/json"
			}
		};
		restClient.post(urlQR+accessToken, args, function(data, response) {
			// parsed response body as js object
			// console.log("data");
			var qrCodePath = getQRCodePath('20170811.png');

			fs.writeFile(qrCodePath, data, function(err) {
				if (err) {
					return console.error(err);
				}
				var responseData = {};
				
				responseData.qrCodeURL=getQRCodeURL('20170811.png');
				
				
				res.setHeader('Content-Type', 'application/json');
				res.status(200).send(JSON.stringify(responseData));
			});
			// raw response
			// console.log(response);
		});

		/*
		res.send({
			'regist' : {
				title : 'dddd'
			}
		});
		*/
	}
});

function getQRCodePath(imgName) {
	return "./public/qr/"+imgName;
}
function getQRCodeURL(imgName) {
	return "http://localhost:3000/qr/"+imgName;
}


module.exports = router;
