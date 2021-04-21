const notes = [
    {
        id: 1,
        subject: "terminology of javaScript",
        date: "April, 16, 2021",
        feeling: "excited",
        timeSpent: "30 minutes.",
    },
    {
        id: 2,
        subject: "basic array of objects",
        date: "April, 16, 2021",
        feeling: "confident",
        timeSpent: "45 minutes.",
    }
]
// console.log(notes)

const noteAboutToday = {
    id: 3,
    subject: "push method",
    date: "April, 17, 2021",
    feeling: "good",
    timeSpent: "1 hour",
}
notes.push(noteAboutToday);
// console.log(notes);

// for (const note of notes) {
//     console.log(`Note ${note.id}
//     ${note.date}
//     ${note.subject}
//     ${note.timeSpent}
//     ${note.felling}
//     `)
// }

// const searchTerm = "confident"
// for (const note of notes) {
//     if (note.feeling === searchTerm) {
//         console.log(`On ${note.date} I was feeling ${note.feeling} about, ${note.subject}.`);
//     }
// }

const noteAboutMonday = {
    subject: "proper adding",
    date: "April, 19, 2021",
    feeling: "okay",
    timeSpent: "40 minutes",
}
const createNote = (Newnote) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1

    Newnote.id = idForNewNote
    notes.push(Newnote)
}
createNote(noteAboutMonday)

for (const note of notes) {
    console.log(`Note ${note.id}
    ${note.date}
    ${note.subject}
    ${note.timeSpent}
    ${note.felling}
    `)
}

console.log(notes)