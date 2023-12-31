// 0) START ZERO (SETTING UP DOTENV)
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
// console.log(process.env);

// 1) IMPORT PACKAGES
// build-in packages

// third-party packages
const express = require('express');
const mongoose = require('mongoose');

// local packages
const app = require('./app');


// 2) DATABASE CONNECTION
const DB = process.env.DB_LOCAL
mongoose.connect(DB).then(() => {
    console.log('Database Connected Successfully!');
});


// 3) LISTENING ON PORT 3000
app.listen(process.env.PORT, () => {
    console.log('Listening from port 3000...');
});