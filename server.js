const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config(); // loads variables from .env
connectDB(); // connects to MongoDB

const app = express();

app.use(cors()); // allows frontend/Postman to talk to this server
app.use(express.json()); // allows server to read JSON data from requests

app.use('/api/auth', authRoutes); // all auth routes start with /api/auth

app.get('/', (req, res) => res.send('Auth API is running...'));

const PORT = process.env.PORT || 7860;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));