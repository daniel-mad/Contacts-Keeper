const express = require('express');
const connectDB = require('./config/db');
const app = express();

const port = process.env.PORT || 5000;
//Connect Database
connectDB();

// Except body data
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the ContactKeeper API' });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
