const router = require('express').Router();
const fs = require('fs')


router.get('/notes', (req, res) => {
    
})
//Clicking on link to notes page takes you to page w/ existing notes listed in the left column & empty fields for new notes on the right -> notes.html
router.get('/notes:id', (req, res) => {
    const result = getNotes(req.params.id, noteId)
})



//GET /api/notes should read the db.json and return all saved notes as json
router.get('/api/notes', (req, res) => {
    fs.readFile(__dirname, + '/../db/db.json', 'utf-8', function(err, data) {
        if (err) {
            console.log(err)
        } else {
            res.json(JSON.parse(data))
        }
    })
})
    
//POST /api/notes should receive a new note to save on the req.body -> add it to db.json file -> then return the new note to client
    //Each note should have unique id

//DELETE notes route


module.exports = router