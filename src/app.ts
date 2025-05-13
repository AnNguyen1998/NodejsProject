import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/book.routes';
import connectDB from './config/database';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome!!!')
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});