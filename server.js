const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./route/route');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});
app.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

routes(app);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
