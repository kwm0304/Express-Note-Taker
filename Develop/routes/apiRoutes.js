const router =require('express').Router()
const db = require ('../db/db.json')
const { createNewNote } = require('../db/helper')
const {v4 : uuidv4} = require('uuid')
const { noteArray } = require('../db/db.json')
// const { read, write, retrieveNotes,addNote } = require('../db/helper')

//GET /api/notes should read the db.json and return all saved notes as json
router.get('/api/notes', (req, res) => {
    let data = noteArray;
    res.json(data)
})

router.post('/api/notes', (req, res) => {
    req.body.id = uuidv4()
   const note = createNewNote(req.body, db);
   
   res.json(note)
}) 
//DELETE notes route
 module.exports = router;
 