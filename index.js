import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import route from './src/Route/index.js';
const app = express()
dotenv.config()
app.use(cors());
app.use(express.json());
app.use('/', route);
const PORT=process.env.PORT
app.listen(PORT, () => console.log(`${PORT} engine start`));