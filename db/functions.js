const uuid = require('uuid/v1');
const fs = require("fs");
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    getNotes() {
        return readFileAsync("db/db.json", "utf8").then((notes) => {
            let parsedNotes = JSON.parse(notes);
            return parsedNotes;



            // try {
            //     parsedNotes = [].concat(JSON.parse(notes))
            // } catch (err) {
            //     pasredNotes = []
            // }
        })
    }

    addNote(note) {
        const { title, text } = note;

        if (!title || !text) {
            throw new Error('Title and text are required')
        }

        const newNote = { title, text, id: uuid() };
        this.getNotes().then((notes) => {
            notes.push(newNote);

        });
        // const currentNotes = this.getNotes
        // this.getNotes().then((notes) => {

        // })
    }
}

module.exports = new Store