'use strict';

function routes(app) {
    app.use('/api/persons', require('./api/person'));
}

module.exports = routes;