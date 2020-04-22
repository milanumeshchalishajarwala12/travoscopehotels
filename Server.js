const express = require('express');
const app = express();
const connectDB = require('./config/db');
const path = require('path');

//Connect to database
connectDB();

//INIT middleware
app.use(express.json({ extended: false }));

app.use('/api/rooms', require('./Routes/api/rooms'));
app.use('/api/auth', require('./Routes/api/auth'));
app.use('/api/users', require('./Routes/api/users'));
app.use('/api/bookings', require('./Routes/api/bookings'));
app.use('/api/locations', require('./Routes/api/locations'));
app.use('/api/orders', require('./Routes/api/orders'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder

  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
