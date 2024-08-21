const mongoose = require('mongoose');
const express = require('express');

const app = express();
app.use(express.json());

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model('User', userSchema);

app.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
