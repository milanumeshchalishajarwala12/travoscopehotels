const express = require('express');
const app = express();
const connectDB = require('./config/db');

//Connect to database
connectDB();

//INIT middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Server Running');
});

app.use('/api/rooms', require('./Routes/api/rooms'));
app.use('/api/auth', require('./Routes/api/auth'));
app.use('/api/users', require('./Routes/api/users'));
app.use('/api/bookings', require('./Routes/api/bookings'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
