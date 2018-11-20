var express = require('express');
var router = express.Router();
var db = require('../db.js')
/* GET users listing. */
router.get('/test', function(req, res, next) {
	 db.insertData('test', {"name":'小心晴www', url: 'www.xiaoxinqing.com'})
  res.send('respond with a resource 哈哈哈哈哈');
});

export default router;
