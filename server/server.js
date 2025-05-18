require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const postRoutes = require('./routes/posts');

app.use(cors({
origin: ['https://furniture-store-wokiokis-projects.vercel.app'],
  credentials: true
}));

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', productRoutes);
app.use('/api', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});