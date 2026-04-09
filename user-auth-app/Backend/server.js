const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/crudDB')
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Start Server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});