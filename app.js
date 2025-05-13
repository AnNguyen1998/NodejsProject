const express = require('express');
const cors = require('cors');
const bookRoutes = require('./src/routes/book.routes.ts');
const connectDB = require('./src/config/database.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

connectDB();

app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome!!!')
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});