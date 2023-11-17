const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const user_route = require('./routes/user.route.js')
const login = require('./routes/login.route.js');

app.use('/login', login)

app.listen(8080);