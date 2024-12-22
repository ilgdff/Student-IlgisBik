const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Обработка статического контента
app.use(express.static(path.join(__dirname, 'public')));

// Обработка GET запросов
app.get('/', (req, res) => {
    res.send('<h1>Главная страница</h1>');
});

// Обработка POST запросов
app.post('/submit', (req, res) => {
    const { name } = req.body;
    res.send(`Данные получены: ${name}`);
});

// Обработка ошибки 404
app.use((req, res) => {
    res.status(404).send({ error: "Ресурс не найден" });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});