import express from 'express';
import dotenv from 'dotenv';
import db from './config/connection.js';
import routes from './routes/index.js';

dotenv.config();

await db();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});
