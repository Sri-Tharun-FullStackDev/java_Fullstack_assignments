import express, { Application } from 'express';
import bookRoutes from './routes/books';

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/books', bookRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
