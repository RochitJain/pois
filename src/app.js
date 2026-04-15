const express = require('express');
const app = express();
const report = require('./modules/reports/report.route');

app.use(express.json());    
app.use('/', report);


module.exports = app