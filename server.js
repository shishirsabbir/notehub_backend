// Setting Up Environment Variables
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// Importing Modules
const express = require('express');
const mongoose = require('mongoose');

// Importing Local Modules
const noteRouter = require('./routes/noteRoutes');
const Note = require('./model/noteModels');

// Connecting to DB
const DB = process.env.DATABASE_LOCAL;

mongoose
    .connect(DB)
    .then(con => {
        console.log('Database Connected!');
    })
    .catch(error => {
        console.log(error);
    });


// Defining the express app
const app = express();

// Adding Middlewares
app.use(express.json());


// Mouting the routers
app.use('/api/v1/notes', noteRouter);


// Listening from the server on port 3000
app.listen(3000, () => {
    console.log('Listening from port 3000...');
});