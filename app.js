const yargs = require('yargs');
const _= require('lodash');

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
.help()
.argv

console.log("\n********** Notes v2 **********\n\n");

if(args.command==='add')
    console.log("Add note goes here");
else
{
    console.log("Command not found.");
    console.log("Please run with a command: ex: add(-t -b) | remove(-t) | read(-t) | list() | --help \n\n");
}