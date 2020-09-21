const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const router = require('./app/router');
const morgan = require('morgan');

const PORT = process.env.PORT || 5050;
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} ...`);
});