import express from 'express';
import users from './users.js'
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.sendFile("../index.html" );
// });

export default function routers(app) {
	app.use('/users', users);
};
