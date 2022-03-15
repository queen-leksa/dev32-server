const db = require("./db.js");

const Tables = db.Schema({
    name: String,
    db: String,
    fields: [Object]
});

module.exports = db.model("tables", Tables);