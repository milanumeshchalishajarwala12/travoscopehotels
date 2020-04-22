const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');

connectDB();

//INIT middleware
app.use(express.json({ extended: false }));

app.use('/api/rooms', require('./Routes/api/rooms'));
app.use('/api/users', require('./Routes/api/users'));
app.use('/api/admin', require('./Routes/api/admin'));
app.use('/api/auth', require('./Routes/api/auth'));
app.use('/api/staff', require('./Routes/api/staff'));

// Serve static assets in production

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT} `);
});
