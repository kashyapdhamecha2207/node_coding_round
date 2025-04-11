const express = require('express');
const app = express();
const PORT = 3000;

const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "John", email: "john@example.com" },
    { id: 3, name: "marie", email: "marie@example.com" }
];

app.get('/', (req, res) => {
    res.send('Server is running')
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})