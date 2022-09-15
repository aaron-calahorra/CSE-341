const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hello, Lluvia!!')
});

module.exports = routes;