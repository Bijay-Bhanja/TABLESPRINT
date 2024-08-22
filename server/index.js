require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const subcategoryRoutes = require('./routes/subcategoryRoutes');
const productRoutes=require('./routes/productRoutes')
// const { authenticateToken } = require('./middleware/authMiddleware');
const { errorHandler } = require('./middleware/errorMiddleware');


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

connectDB();

// Routes
app.use('/auth', authRoutes);
app.use('/categorys', categoryRoutes);
app.use('/subcategorys', subcategoryRoutes);
app.use('/products',productRoutes)

// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
