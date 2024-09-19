const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const path = require('path')

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    console.log("usernames will be logged here - wip")
})

app.get('/new', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'))
})

app.post('/new', (req, res) => {
    console.log("usernames will be logged here - wip")
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
})