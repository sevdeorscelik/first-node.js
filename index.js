
const express = require('express')


const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})
app.get('/about', (req, res) => {
    res.status(200).send('about page')
})
app.get('/contact', (req, res) => {
    res.status(200).send('contact page')
})
app.get('/contact', (req, res) => {
    res.status(404).send('404 not found')
})

const port = 3000

app.listen(port, () => {
    console.log(`sunucu port ${port}'da calistirildi`);
})
