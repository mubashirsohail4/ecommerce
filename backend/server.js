import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000; // Use PORT from .env or default to 3000


app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // CORS middleware to allow cross-origin requests
app.use(morgan('dev')); // Logging middleware
app.use(helmet()); // Security middleware

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});