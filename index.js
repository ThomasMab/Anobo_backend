// récupère les infos de connection du .env
const dotenv = require('dotenv');
dotenv.config();
const router = require('./app/router');
//log des requêtes dans la console
const morgan = require('morgan');
//pour les CORS
const cors = require('cors');

var fs = require('fs'),
  https = require('https'),
  express = require('express');
  const app = express();

 
https.createServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
}, app).listen(8081);
 
app.get('/', function(req, res) {
  res.header('Content-type', 'text/html');
  return res.end('<h1>HTTPS WORKS!</h1>');
});

// permet de débloquer les CORS
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(router);

