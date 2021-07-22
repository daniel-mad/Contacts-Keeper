const path = require('path');
const express = require('express');
const connectDB = require('./config/db');
const app = express();

const port = process.env.PORT || 5000;
//Connect Database
connectDB();

// Except body data
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
