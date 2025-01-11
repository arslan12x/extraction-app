function routes(app) {
    app.post('/login', (req, res) => {
        const { username, password } = req.body;

        if (username && password) {
            console.log(`Received username: ${username}, password: ${password}`);
            res.json({ success: true, message: 'Login successful!' });
        } else {
            res.json({ success: false, message: 'Username or password is missing.' });
        }
    });
}

module.exports = routes;
