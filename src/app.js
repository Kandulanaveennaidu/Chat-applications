const express = require('express');
const cors = require('cors');
const messageRoutes = require('./routes/message.routes');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', messageRoutes);

module.exports = app;
