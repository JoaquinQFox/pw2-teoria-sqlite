const path = require('path');
const express = require('express');
const app = express();

const FRONT_PATH = path.join(__dirname, '..', 'front');

app.use(express.static(FRONT_PATH));
app.use(express.json());

app.get('/', (request, response) => {
    response.sendFile(path.join(FRONT_PATH, 'index.html'));
});

app.listen(3000, () => {
    console.log("Escuchando en: http://localhost:3000");
})