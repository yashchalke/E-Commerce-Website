const express = require('express');
require('dotenv').config();
const {ConnectToDb} = require('./db/dbconnect');
const Auth_router = require("./routes/AuthRoutes");
const cors = require('cors');

const PORT = process.env.PORT || 2000;

const app = express();

ConnectToDb(process.env.DB_STRING);

app.use(express.json());
app.use(cors());

app.use('/Api/Auth',Auth_router);

app.listen(PORT , ()=>{
    console.log(`Server is Running on port ${PORT}`);
});