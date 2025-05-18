const path = require('path');
const express = require('express');
const app = express();
const db = require('./db');

const FRONT_PATH = path.join(__dirname, '..', 'front');

app.use(express.static(FRONT_PATH));
app.use(express.json());

app.get('/', (request, response) => {
    response.sendFile(path.join(FRONT_PATH, 'index.html'));
});

app.get('/actores', (request, response) => {
    db.all("select * from actor", [], (err, rows) => {
        if (err) 
            response.status(500).json({ error: err.message });
        else 
            response.json(rows);
    });
});

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000");
})