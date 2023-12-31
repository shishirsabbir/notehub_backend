// 1) IMPORT PACKAGES
// build-in packages

// third-party packages
const mongoose = require('mongoose');

// local packages


// 2) DEFINING THE SCHEMA
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, 'A note must have a title'],
        unique: true
    },
    text: {
        type: String,
        require: [true, 'A note must have text about something']
    },
    author: {
        type: String,
        require: [true, 'A note must have a author'],
        default: 'shishirsabbir'
    },
    time: {
        type: Number,
        default: new Date().getTime()
    }
});


// 3) DEFINING THE MODEL FROM THE SCHEMA
const Note = mongoose.model('Note', noteSchema);


// 4) EXPORTING THE TOUR MODEL
module.exports = Note;