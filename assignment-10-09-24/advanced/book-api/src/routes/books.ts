import { Router, Request, Response } from 'express';

const router = Router();

// Sample data
const books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

// GET /api/books - Fetch all books
router.get('/', (req: Request, res: Response) => {
    res.json(books);
});

// GET /api/books/:id - Fetch a book by ID
router.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    const book = books.find(b => b.id === id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
});

export default router;
