const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    console.log("usernames will be logged here - wip")
})

app.get('/new', (req, res, next) => {
    next()
})

app.post('/new', (req, res) => {
    console.log("usernames will be logged here - wip")
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
})