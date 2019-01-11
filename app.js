const yargs = require('yargs');
const _ = require('lodash');
var notes = require('./notes');

const titleOptions =  {
    describe:'Title of the note.',
    demand:true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of the note.',
    demand:true,
    alias: 'b'
}

const args =  yargs
.command('add', 'Add a new note by providing a title',{
    title:titleOptions,
    body:bodyOptions
})
.command('list', 'Lists all the notes.')
.command('read', 'Read a specified note by providing a title.',{
    title:titleOptions
})
.help()
.argv

var command = args._[0];

console.log("\n********** Notes v2 **********\n\n");

switch(command)
{
    case 'add':
        var newnote = notes.addnote(args.title, args.body);

        if(_.isUndefined(newnote))
        {
            console.log("Oops! Something went wrong. Note was not created :(");
        }
        else
        {
            console.log(`Note with title - <${newnote.title}> was created.`);
        }

        break;
    
    case 'list':
        var allnotes = notes.listall();
        if(!_.isUndefined(notes))
        {
            allnotes.forEach(note => {
                notes.log(note.title, note.body);
            });
        }
        break;

    case 'read':
        if(!_.isUndefined(args.title))
        {
            notes.readnote(args.title);
        }
        else
        {
            console.log("Please specify the title of the note. (--title=<note name>)");
        }
        break;

    default:
        console.log("Command not found.");
        console.log("Please run with a command: ex: add(-t -b) | remove(-t) | read(-t) | list() | --help \n\n");
        break;
}