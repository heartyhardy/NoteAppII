const fs = require('fs');
const _= require('lodash');

var fetchAll = () =>{
    try{
        var allnotes = fs.readFileSync('notes-data.json');
        return JSON.parse(allnotes);
    }
    catch(err)
    {
        return [];
    }
}

var savenote = (notes) =>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addnote = (title, body)=>{
    var notes = fetchAll();
    var newnote = {
        title,
        body
    }

    var duplicatednotes = notes.filter((note)=>note.title===title);

    if(duplicatednotes.length ===  0)
    {
        notes.push(newnote);
        savenote(notes);
        return newnote;
    }
    else
    {
         console.log("Title already exists in the notes. Title has to be unique.");
         return undefined;
    }
}

var listall = () =>{
    return this.fetchAll();
}

var log = (title, body) => {
    
}

module.exports = {
    addnote,
    listall
}