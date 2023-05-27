const fs = require('fs')
const chalk = require('chalk')
//const { title } = require('process')



const addNote = (title,body)=>{
    const notes = loadNotes()
    //const duplicatedNotes = notes.filter((note)=> note.title === title)
    const duplicatedNote = notes.find((note)=> note.title === title)
    
    if (!duplicatedNote){
        notes.push({
            title: title,
            body: body
        })
        saveNote(notes)  
        console.log(chalk.green.inverse('New note added!'))
    }else{
        console.log(chalk.red.inverse('Note title is taken!!!'))
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title)
       
    if (notesToKeep.length !== notes.length){
        saveNote(notesToKeep)
        console.log(chalk.green.inverse('Note Removed'))
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if(notes.length === 0 ){
        console.log(chalk.inverse('You have no notes!!!'))
    } else {
        console.log(chalk.inverse('Your notes'))
        notes.forEach(note => {
            console.log('- ' + note.title)
            
        });
    }
}

const readNote = (title)=>{
    const notes = loadNotes()
    const noteToRead = notes.find((note)=> note.title === title)

    if(noteToRead){
        console.log(chalk.blue.inverse(noteToRead.title))
        console.log(noteToRead.body)
    }else{
        console.log(chalk.red.inverse('No note found'))
    }

}

const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)

    } catch (e){
        return[]
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}