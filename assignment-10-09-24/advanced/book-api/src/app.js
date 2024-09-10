"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var books_1 = require("./routes/books");
var app = (0, express_1.default)();
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Routes
app.use('/api/books', books_1.default);
// Start the server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
