const router = require('express').Router();
const data = require('../db/db.json');
const { deleteNote, createNewNote } = require('../db/helper')
const { v4: uuidv4 } = require('uuid');
const { fstat } = require('fs');
const path = require('path')
const notes = require('../db/db.json')

router.get('/notes', (req, res) => {
    fstat.readFile(path.join(_dirname, 'db', 'db.json'), 'utf-8', function (err,res) {
        if(err) {
            res.status(500).json({ error: "woops"})
        return
    }
    res.json(JSON.parse(data))
    })
})

router.post('/notes', (req, res) => {
    req.body.id = uuidv4
    const newNote = createNewNote(req.body, notes)
    res.json(newNote);
});
router.delete('/notes/:id', (req, res) => {
    const targetNote = req.params.id 
    deleteNote(targetNote, notes);
    res.redirect('');
});

module.exports = router;
 