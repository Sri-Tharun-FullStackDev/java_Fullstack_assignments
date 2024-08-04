const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "MyNewPass",
    database: "projects"
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Error connecting: ", err.stack);
        return;
    }
    console.log("Connected as id: ", db.threadId);
});

const app = express();
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Create a new record
app.post('/application_form', (req, res) => {
    const { id, name } = req.body;
    const sql = 'INSERT INTO application_form (ID, NAME) VALUES (?, ?)';
    db.query(sql, [id, name], (err, result) => {
        if (err) {
            console.error("Error query: ", err.stack);
            res.status(500).send(err);
            return;
        }
        res.send("Record inserted");
    });
});

// Read all records
app.get('/application_form', (req, res) => {
    const sql = 'SELECT * FROM application_form';
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error query: ", err.stack);
            res.status(500).send(err);
            return;
        }
        res.json(results);
    });
});

// Update a record
app.put('/application_form/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const sql = 'UPDATE application_form SET NAME = ? WHERE ID = ?';
    db.query(sql, [name, id], (err, result) => {
        if (err) {
            console.error("Error query: ", err.stack);
            res.status(500).send(err);
            return;
        }
        res.send("Record updated");
    });
});

// Delete a record
app.delete('/application_form/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM application_form WHERE ID = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("Error query: ", err.stack);
            res.status(500).send(err);
            return;
        }
        res.send("Record deleted");
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

RTCPeerConnection.end();