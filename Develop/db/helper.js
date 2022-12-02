const {v4 : uuidv4} = require('uuid')
const fs = require('fs');
const { noteArray } = require('../db/db.json')

function read() {
    return readFileAsync(path.join(__dirname, "db.json"), "utf8");
} 

function write(note) {
    fs.writeFileSync('db/db.json', JSON.stringify(note))
} 

function createNewNote(note, noteArray) {
    const { title, text, id } = note;
    note.id = uuidv4()
    noteArray.push(note)
    if (!title || !text) {
        throw new Error("Note 'title' and 'text' cannot be blank");
    } else write(note)
}
    
  module.exports = { read, write, createNewNote }