const express = require('express');

const rev4Router = require('./Router/rev4.routes');

const app = express();

app.use(express.json());

app.use(rev4Router);

app.listen(3333, () => console.log('rodando femily'));
