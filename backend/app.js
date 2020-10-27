const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000; 

app.use(cors({
  origin: '*',
  methods: ['GET', 'PUT', 'DELETE', 'PATCH', 'POST'],
  allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-With, Accept'
}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const productRouter = require('./routes/products');
const orderRouter = require('./routes/order');

//Define Routes 
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req, res) => {
    res.send("app is running")
}); 

app.listen(PORT, () => {
    console.log(" Server is running ")
}); 