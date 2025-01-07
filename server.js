const express = require('express');

const app = express();

app.use(express.json());

const port = 3001;

let phonebook = [
    {
        id: '1',
        name: 'Mario',
        number: '415-636-9090'
    },
    {
        id: '2',
        name: 'Luigi',
        number: '1-744-620-1444'
    },
    {
        id: '3',
        name: 'Yoshi',
        number: '822-438-9967'
    },
    {
        id: '4',
        name: 'Donkey Kong',
        number: '904-901-9131'
    },
]

app.get('/api/persons', (req,res) => {
    console.log(phonebook)
    console.log('nodded')
    res.json(phonebook)
})

app.get('/api/persons/:id', (req,res) => {
    const id = req.params.id
    const person = phonebook.find(person => person.id === id)

    if (person) res.send(person)
    else res.status(400).json({error: 'no matching ID found'})
});

app.get('/info', (req,res) => {
    const date = new Date();
    res.send(`<p>The phonebook contains ${phonebook.length} entries</p><p>${date}</p>`)
});

app.delete('/api/persons/:id', (req,res) => {
    const id = req.params.id
    phonebook = phonebook.filter(person => person.id !== id)
    console.log(phonebook)
    res.status(204).end()
});


app.listen(port, () => {
    console.log(`server listening on port:${port}`)
})