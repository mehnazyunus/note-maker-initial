var Note = require('../models/notes');
var express = require('express');
var userMiddleWare = require("../middlewares/userMiddleware");
var router = express.Router();

// to create note
router.post('/', function (req,res, next) {
    var response = {};
    var noteContent = req.body;
    //noteContent.createdBy = req.cookies.user_id;
    var newNote = new Note(noteContent);
    newNote.save(function (err,user) {
        if(err)  {
            response.error = err;
        }
        else{
            response.status = "Note created";
        }
        res.send(response);
    });
});

// to get all the notes
// in frontend we will check for the particular user and display only that notes
router.get('/', function (req,res,next) {

});

// to edit a particular note
router.put('/:id', function (req,res,next) {
    
});

// to delete a particular note
router.delete('/:id', function (req,res,next) {

});

module.exports = router;