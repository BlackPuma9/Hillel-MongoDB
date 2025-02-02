require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/routes');

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use('/api/products', productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})