const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
})