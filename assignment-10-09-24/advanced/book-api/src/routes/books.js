"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
// Sample data
var books = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];
// GET /api/books - Fetch all books
router.get('/', function (req, res) {
    res.json(books);
});
// GET /api/books/:id - Fetch a book by ID
router.get('/:id', function (req, res) {
    var id = parseInt(req.params.id, 10);
    var book = books.find(function (b) { return b.id === id; });
    if (book) {
        res.json(book);
    }
    else {
        res.status(404).json({ message: 'Book not found' });
    }
});
exports.default = router;
