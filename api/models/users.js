const db = require("../db.js");

const Users = db.Schema({
    name: String,
    age: Number,
    login: String,
    password: String,
    email: String,
    phone: String
});

module.exports = db.model("users", Users);