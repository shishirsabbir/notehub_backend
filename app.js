// 1) IMPORT PACKAGES
// build-in packages

// third-party packages
const express = require('express');
const morgan = require('morgan');

// local packages
const noteRouter = require('./routes/noteRoutes');


// 2) DEFINING THE EXPRESS APP
const app = express();

// 3) MIDDLEWARES
if (process.env.NODE_ENV  === 'development') {
    app.use(morgan('dev'));
}

// for parsing json data
app.use(express.json());


// for adding request time with the request
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

// 4) ROUTE OPERATIONS
app.use('/api/v1/notes', noteRouter);


// 5) EXPORTING APP
module.exports = app;
