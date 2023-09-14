const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const now = new Date();
    const hour = now.getHours();

    let message;

    if (hour >= 6 && hour < 12) {
        message = 'Buenos días!';
    } else if (hour >= 13 && hour < 19) {
        message = 'Buenas tardes!';
    } else if (hour >= 20 || hour < 5) {
        message = 'Buenas noches!';
    }

    res.send(message);
});

const port = 8080;

app.listen(port, () => {
    console.log(`El servidor está listo para operar en el puerto http://localhost:${port}`);
});







