var express = require('express');
var router = express.Router();
var cors = require('cors');
//var sha256  = require('sha256');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var mysql = require('mysql');
var config = require('../config/secret.json');

var options = {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    schema: {
        tableName: 'sessions',
        columnNames: {
            session_id: 'session_id',
            expires: 'expires',
            data: 'data'
        }
    }
};

var sessionStore = new MySQLStore(options);

var con = mysql.createConnection({
  host: "localhost",
  user: "ericx2x",
  password: "water123",
  database: "itsasmileworldqueue"
});

router.use(session({
  secret: 'iloveel89',
  store: sessionStore,
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24 }  //1000 * 60 * 60 * 24 * 7  //7days 10000 //10 seconds   1000000 //16~ minutes
})); //7200000;

//This is actually important to fill out correctly. Hook it up to your front end doing the request
//router.use(cors({origin: ["http://ericnote.us","http://www.ericnote.us"], credentials: true}));
router.use(cors({origin: ["http://localhost:8080","http://localhost:8080"], credentials: true}));

router.use(function(req, res, next) {
   next();
});

con.connect(function(err) {
  if (err) throw err;
});

router.post('/', function(req, res, next) {
  con.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;

      const users_data = result.find(c => c.name === req.params.users);

      if (req.body.users === users_data.users){
        req.session.logged=true;
        res.send("logged");
      } else {
        res.send("error")
      }
  });
});

router.post('/logout', function(req, res, next) {
        req.session.logged=false;
        res.send("logged out");
});

router.get('/', function(req, res, next) {
	con.query("SELECT * FROM users", function (err, result, fields) {
		if (err) throw err;

                res.json( result );
    });
});

module.exports = router;
