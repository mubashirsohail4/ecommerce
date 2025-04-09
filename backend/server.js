import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // CORS middleware to allow cross-origin requests
app.use(morgan('dev')); // Logging middleware
app.use(helmet()); // Security middleware

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});