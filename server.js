const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the ContactKeeper API' });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(port, () => {
  console.log(`Server lisenong on port ${port}`);
});
