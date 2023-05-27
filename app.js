const notes = require ('./notes.js')
const yargs = require ('yargs')

//Creat add comand
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'

        },
         body:{
            describe:'Note body',
            demandOption: true,
            type:'string'
         }
    },
    handler (argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Creat remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})

//Creat list command
yargs.command({
    command: 'list',
    describe: 'list all note',
    handler (){
        notes.listNotes()
    }
})
//Creat read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe:'note title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.readNote(argv.title)
    }
})

yargs.parse()
