const path = require("path");
const router = require("express").Router();
const store = require ('../db/functions');
const { v4: uuidv4 } = require('uuid');
const {
    readFromFile,
    writeToFile,
    readAndAppend,
} = require('../helpers/fsUtils');

router.get('/notes', (req, res) => {
    readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
    
});

router.post("/notes", (req, res) => {
    // res.json('posted!');
    // store.addNote(req.body);
    const newNote = req.body;
    newNote.id = uuidv4(),

    readAndAppend(newNote, "./db/db.json");
    res.json(newNote);
});


module.exports = router;