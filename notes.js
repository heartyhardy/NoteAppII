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
    return fetchAll();
}

var log = (title, body) => {
    if(!_.isUndefined(title) || !_.isUndefined(body))
    {
        console.log("\x1b[37m","\n---------------------------------");
        console.log("\x1b[32m",`\n---------${title}---------`);
        console.log("\x1b[37m","\n---------------------------------");
        console.log("\x1b[34m",`\n ${body}`);
        console.log("\x1b[37m","\n---------------------------------\n\n");
    }
}

module.exports = {
    addnote,
    listall,
    log
}