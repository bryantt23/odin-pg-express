const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const path = require('path')
const db = require("./db/queries")

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
    const usernames = await db.getAllUserNames()
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map(user => user.username).join(", "))
})

app.get('/new', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'))
})

app.post('/new', async (req, res) => {
    const { username } = req.body;
    await db.insertUsername(username)
    console.log("usernames will be logged here - wip")
})

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
})