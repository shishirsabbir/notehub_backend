// 1) IMPORT PACKAGES
// build-in packages

// third-party packages
const express = require('express');

// local packages
const { getAllNotes, getNote, createNote, updateNote, deleteNote } = require('./../controllers/noteControllers');


// 2) DEFINING THE EXPRESS ROUTER
const router = express.Router();


// 3) SETTING UP ROUTER
router
    .route('/')
    .get(getAllNotes)
    .post(createNote);


router
    .route('/:id')
    .get(getNote)
    .patch(updateNote)
    .delete(deleteNote);


// 4) EXPORTING ROUTER
module.exports = router;