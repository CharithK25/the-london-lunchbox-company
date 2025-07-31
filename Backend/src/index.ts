import express from 'express';
import { db } from './db';
import mealsRouter from './routes/meals';
const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/meals', mealsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
