"user strict"
const express = require('express');
const router = require('./routes/index');

const app = express();
const port = process.env.PORT || 5000;

app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(router);

app.listen(port);