var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var authRoutes = require('./routes/auth');
var productRoutes = require('./routes/products');
var orderRoutes = require('./routes/orders');

var app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://antoniojoseph:antonio@cluster0.ewuhvls.mongodb.net/petstoreapp?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
