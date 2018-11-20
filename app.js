import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import db from './db.js';
import chalk from 'chalk';
import routers from './routes/index';
 

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

routers(app);
app.use('/index', function(req, res, next) {
  res.sendFile(__dirname + "/" + "index.html" );
});

app.use('/process_get', function (req, res) {

   // 输出 JSON 格式
   const response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const server = app.listen(8081, function () {
 
  const host = server.address().address
  const port = server.address().port
 
  console.log(chalk.green("应用实例，访问地址为 http://%s:%s", host, port))
 
})
export default app;
