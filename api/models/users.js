const getUsers = function() {
    const db = require("./db.js");

    const Users = db.Schema({
        name: String,
        age: Number,
        login: String,
        password: String,
        email: String,
        phone: String
    });
    return db.model("users", Users);
}
module.exports = getUsers;