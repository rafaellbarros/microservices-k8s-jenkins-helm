const express = require('express');
const bodyParser = require('body-parser');
const github = require('./api/github');

const app = express();
const cors = require('cors');

// Permitir CORS para a origem específica
// TODO: verificar para pegar do .env
app.use(
  cors({
    origin: /^http:\/\/localhost(:\d+)?$/,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  }),
);

const apiPrefix = '/api/scm';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`${apiPrefix}/github`, github);
app.get(`${apiPrefix}/health`, (req, res) => res.json({ msg: 'Health OK' }));

const port = process.env.PORT || 3030;

app.listen(port, () => console.log(`Server running on port ${port}`));
