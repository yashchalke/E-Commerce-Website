const express = require('express');
require('dotenv').config();
const {ConnectToDb} = require('./db/dbconnect');
const Auth_router = require("./routes/AuthRoutes");
const Product_router = require('./routes/ProductRoutes');
const Cart_router = require('./routes/cart');
const Payment_router = require('./routes/PaymentRoutes');
const AdminRoutes = require('./routes/AdminRoutes');


const cors = require('cors');

const PORT = process.env.PORT || 2000;

const app = express();

ConnectToDb(process.env.DB_STRING);

app.use(express.json());
app.use(cors());

app.use('/Api/Auth',Auth_router);
app.use('/Api/Product',Product_router);
app.use('/Api/Cart',Cart_router);
app.use('/Api/Payment', Payment_router);
app.use('/Api/Admin', AdminRoutes);



app.listen(PORT , ()=>{
    console.log(`Server is Running on port ${PORT}`);
});