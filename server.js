const express = require("express");
const path = require("path");
const fs = require("fs");

const html = require("./routes/html");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/notes", (req, res) => {
    res.json('posted!')
})

app.use('/', html);

// app.get("/", function (req, res) {
//     res.sendFile(path.join(__dirname, "/public/index.html"));
// });

// app.get("/notes", function (req, res) {
//     res.sendFile(path.join(__dirname, "/public/notes.html"));
// })

app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT}`));