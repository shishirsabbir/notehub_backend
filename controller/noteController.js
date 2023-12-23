// Importing Modules


// Importing Local Modules
const Tour = require('./../model/noteModels');


// note controllers
const getNotes = (req, res) => {
    const tours = 

    res.status(200).json({
        status: 'success',
        message: 'This route is for getting all the notes'
    });
};

const getNote = (req, res) => {
    const noteID = req.params.id * 1;

    res.status(200).json({
        status: 'success',
        message: `Single Note- Note ID: ${noteID}`
    });
};

const createNote = async (req, res) => {
    const newNote = req.body;

    res.status(201).json({
        status: 'success',
        data: {
            note: newNote
        }
    });
};

const updateNote = (req, res) => {
    const noteID = req.params.id * 1;

    res.status(204).json({
        status: 'success',
        message: `This route is for updating note- Note ID: ${noteID}`
    });
};

const deleteNote = (req, res) => {
    const noteID = req.params.id * 1;

    res.status(204).json({
        status: 'success',
        message: `This route is for deleting note- Note ID: ${noteID}`
    });
};


module.exports = {
    getNotes, getNote, createNote, updateNote, deleteNote
}