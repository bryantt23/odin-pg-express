const pool = require("./pool")

async function getAllUserNames(search = "") {
    const query = search.trim() === "" ?
        "SELECT * FROM usernames" :
        "SELECT * FROM usernames WHERE username ILIKE $1";
    const params = search.trim() === '' ? [] : [`%${search}%`]
    const { rows } = await pool.query(query, params)
    return rows
}

async function insertUsername(username) {
    await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username])
}

async function deleteAllUsers() {
    const result = await pool.query("DELETE FROM usernames")
    return result.rowCount
}

module.exports = {
    getAllUserNames,
    insertUsername,
    deleteAllUsers
}