
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static('.'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index-puro.html'));
});

app.get('/detalhes', (req, res) => {
    res.sendFile(path.join(__dirname, 'detalhes-puro.html'));
});

app.get('/favoritos', (req, res) => {
    res.sendFile(path.join(__dirname, 'favoritos-puro.html'));
});
const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando em http://0.0.0.0:${PORT}`);
});
