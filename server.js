const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ConnectDB = require('./connect_db');
const app = express();
const PORT = 8080;

ConnectDB("mongodb+srv://ugthisura:thisura%406335213@cluster0.bu0l5e9.mongodb.net/");

app.use(cors());
app.use(bodyParser.json());

const user_route = require('./routes/user.route.js')
const login = require('./routes/login.route.js');

app.use('/login', login)
app.use('/user', user_route)


app.listen(PORT,()=>{
    console.log('server is running');
});