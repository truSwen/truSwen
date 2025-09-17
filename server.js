const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory (for the main page's assets)
app.use(express.static(__dirname));

// Serve static files from the 'app' directory (for the app's assets)
app.use('/app', express.static(path.join(__dirname, 'app')));

// The main page (index.html) is served by the first static middleware

// POST endpoint for registration
app.post('/register', (req, res) => {
    console.log('--- Registration Attempt ---');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Data:', req.body);
    console.log('--------------------------\n');
    res.send('<h1>Regisztrációs kísérlet fogadva!</h1><p>Az adatokat a szerverkonzolon naplóztuk. Egy valós alkalmazásban itt adatbázisba mentés és validáció történne.</p><a href="/app/login.html">Tovább a bejelentkezéshez</a>');
});

// POST endpoint for login
app.post('/login', (req, res) => {
    console.log('--- Login Attempt ---');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Data:', req.body);
    console.log('---------------------\n');
    // In a real app, you would validate credentials and redirect to an order page
    res.send('<h1>Bejelentkezési kísérlet fogadva!</h1><p>Az adatokat a szerverkonzolon naplóztuk. Egy valós alkalmazásban itt a felhasználó hitelesítése történne.</p><a href="/">Vissza a főoldalra</a>');
});

app.listen(PORT, () => {
    console.log(`Carego placeholder server is running on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.');
});
