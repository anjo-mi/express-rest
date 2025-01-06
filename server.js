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


app.listen(port, () => {
    console.log(`server listening on port:${port}`)
})