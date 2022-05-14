const path = require("path");
const router = require("express").Router();
const store = require ('../db/functions')

router.get('/notes', (req, res) => {
    res.json('get!');
});

router.post("/notes", (req, res) => {
    res.json('posted!');
    store.addNote(req.body);
});


module.exports = router;