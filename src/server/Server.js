const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Server Running');
});

app.use('/api/mailer', require('./Routes/api/Mailer'));
app.use('/api/users', require('./Routes/api/Users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
