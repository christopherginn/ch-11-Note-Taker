const path = require("path");
const router = require("express").Router();

router.post("/api/notes", (req, res) => {
    res.json('posted!')
})

module.exports = router;