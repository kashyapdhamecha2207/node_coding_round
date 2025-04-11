const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

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

app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    const userId = parseInt(id);
    const updates = req.body;

    const user = users.find(u => u.id === userId);

    if (user) {
        Object.assign(user, updates);
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})