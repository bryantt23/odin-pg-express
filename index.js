require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000
const path = require('path')
const userController = require('./controllers/userController')

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', userController.getAllUsernames)

app.get('/new', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'))
})

app.post('/new', userController.addUsername)

app.get('/delete', userController.deleteAllUsers)

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
})