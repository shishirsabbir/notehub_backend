// Importing Modules
const express = require('express');

// Importing Local Modules
const {getNotes, getNote, createNote, updateNote, deleteNote} = require('../controller/noteController');


// Defining Express Router
const router = express.Router();


// Defining the routes
router
    .route('/')
    .get(getNotes)
    .post(createNote);

router
    .route('/:id')
    .get(getNote)
    .patch(updateNote)
    .delete(deleteNote);


// Exporting module
module.exports = router;