var express = require('express');
var router = express.Router();
var mysql = require('mysql');

// Database Connection
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'huanying',
	database : 'booking'
});
try {
	connection.connect();

} catch (e) {
	console.log('Database Connetion failed:' + e);
}

var insertSQL = 'INSERT INTO bk_dates (user_id1, user_id2, yearmd,hourms,is_first,job_desc,remark) VALUES (?, ?, ?,?, ?, ?,?)';

/* add new date to database. */
router.post('/add', function(req, res, next) {
	var response = [];

	if (typeof req.body.user_id1 !== 'undefined') {
		var user_id1 = req.body.user_id1, user_id2 = req.body.user_id2;
		var yearmd = req.body.yearmd;
		var hourms = req.body.hourms, is_first = req.body.is_first;
		var job_desc = req.body.job_desc, remark = req.body.remark;

		connection.query(insertSQL, [ user_id1, user_id2, yearmd, hourms,
				is_first, job_desc, remark ], function(err, result) {
			if (!err) {

				if (result.affectedRows !== 0) {
					response.push({
						'result' : 'success'
					});
					response.push({
						'id' : result.insertId
					});
				} else {
					response.push({
						'msg' : 'No Result Found'
					});
				}

				res.setHeader('Content-Type', 'application/json');
				res.status(200).send(JSON.stringify(response));
			} else {
				res.status(400).send(err);
			}
		});

	} else {
		response.push({
			'result' : 'error',
			'msg' : 'Please fill required details'
		});
		res.setHeader('Content-Type', 'application/json');
		res.status(200).send(JSON.stringify(response));
	}

});

var listSQL = "select d.*,u.real_name from bk_dates d,bk_users u where d.user_id2 =u.openid and user_id1 =? ";
var condSQL= "";
var orderSQL = " order by d.yearmd ";

router.post('/list/:user_id1/', function(req, res, next) {
	var user_id1 = req.params.user_id1;

	var response = [];

	var user_id2 = req.body.user_id2;
	var yearmd = req.body.yearmd;
	var hourms = req.body.hourms, is_first = req.body.is_first;
	var job_desc = req.body.job_desc, remark = req.body.remark;
	
	if(typeof yearmd !== 'undefined' && yearmd!=='')
		{
		condSQL =condSQL +" and (yearmd = '"+yearmd +"') ";
		}

	connection.query(listSQL + condSQL+ orderSQL, [ user_id1 ], function(err, rows, fields) {

		console.log(err);
		if (!err) {
			var response = [];

			if (rows.length !== 0) {
				response.push({
					'result' : 'success',
					'data' : rows
				});
			} else {
				response.push({
					'result' : 'error',
					'msg' : 'No Results Found'
				});
			}

			res.setHeader('Content-Type', 'application/json');
			res.status(200).send(JSON.stringify(response));
		} else {
			res.status(400).send(err);
		}
	});

});

module.exports = router;
