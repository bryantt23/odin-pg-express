// Import the database queries module
const db = require('../db/queries')

// Function to handle getting all usernames

async function getAllUsernames(req, res) {
    const { search } = req.query
    try {
        const usernames = await db.getAllUserNames(search)
        console.log("Usernames: ", usernames);
        res.send("Usernames: " + usernames.map(user => user.username).join(", "))
    } catch (error) {
        console.error('Error getting usernames:', error);
        res.status(500).send('Failed to retrieve usernames');
    }
}

// Function to handle inserting a new username
async function addUsername(req, res) {
    try {
        const { username } = req.body;
        await db.insertUsername(username)
        console.log("usernames will be logged here - wip")
        res.send(`Saved username: ${username}`)
    } catch (error) {
        console.error('Error saving username:', error);
        res.status(500).send('Failed to save username');
    }
}

module.exports = {
    getAllUsernames,
    addUsername
};
