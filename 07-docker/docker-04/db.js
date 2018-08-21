'use strict';

let pgp = require('pg-promise')();
let db = pgp(config.postgres);

module.exports.db = db;