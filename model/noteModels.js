// Importing Modules
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title required for notes'],
        trim: true
    },
    text: {
        type: String,
        required: [true, 'text required for notes'],
        trim: true
    },
    author: {
        type: String,
        required: [true, 'author name required for notes'],
        trim: true
    },
    time: {
        type: Number,
        required: [true, 'time required for saving notes']
    }
});

const Note = mongoose.model('Note', noteSchema);


// Exporting Modules
module.exports = Note;