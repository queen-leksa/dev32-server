const db = require("../db.js");

const Tables = db.Schema({
    name: String,
    fields: [Object]
});

module.exports = db.model("tables", Tables);