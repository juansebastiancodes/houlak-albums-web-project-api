require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const routes = require('./routes/index');
const cors = require('cors');
const config = require('./config');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());

app.use('/api', routes);

app.use((_, res) => {
    res.send({
        status: 404,
        message: 'Not Found',
    });
});

app.use((error, req, res, _) => {
    res.send({
        status: 500,
        message: 'Internal server error',
    });
});

const server = app.listen(process.env.PORT || config.port);

module.exports = server;
module.exports.stop = () => { server.close(); };
