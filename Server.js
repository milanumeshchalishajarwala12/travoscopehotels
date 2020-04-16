const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

//INIT middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Cafeteria app is running');
});
/*
app.use('/api/rooms', require('./Routes/api/rooms'));
app.use('/api/users', require('./Routes/api/users'));
app.use('/api/admin', require('./Routes/api/admin'));
*/
app.use('/api/staff', require('./Routes/api/staff'));

app.use('/api/auth', require('./Routes/api/auth'));
app.use('/api/orders', require('./Routes/api/orders'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT} `);
});
