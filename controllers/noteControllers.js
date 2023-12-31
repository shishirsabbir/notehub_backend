// 1) IMPORT PACKAGES
// build-in packages

// third-party packages

// local packages
const Note = require('./../models/noteModel');


// 2) DECLARING THE CONTROLLER
const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        
        res.status(200).json({
            status: 'success',
            requestTime: req.requestTime,
            data: {
                notes
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'failer',
            requestTime: req.requestTime,
            message: 'No notes available'
        });
    }
};

const getNote = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            requestTime: req.requestTime,
            data: {
                note
            }
        });
    } catch (error) {
        res.status(404).json({
            status: 'failer',
            requestTime: req.requestTime,
            message: 'No note available'
        });
    }
};

const createNote = async (req, res) => {
    try {
        const newNote = await Note.create(req.body);

        res.status(200).json({
            status: 'success',
            requestTime: req.requestTime,
            data: {
                note: newNote
            }
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: 'failer',
            requestTime: req.requestTime,
            message: "Invalid data sent!"
        });
    }
};

const updateNote = async (req, res) => {
    try {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });


        res.status(200).json({
            status: 'success',
            requestTime: req.requestTime,
            data: {
                note
            }
        });
    } catch (error) {
        res.status(400).json({
            status: 'failer',
            requestTime: req.requestTime,
            message: 'Invalid Operation'
        });
    }
};

const deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        

        res.status(200).json({
            status: 'success',
            requestTime: req.requestTime,
            message: 'The note is being deleted!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'failer',
            requestTime: req.requestTime,
            message: 'Invalid Operation'
        });
    }
};


// 3) EXPORTING THE CONTROLLERS
module.exports = {
    getAllNotes, getNote, createNote, updateNote, deleteNote
}