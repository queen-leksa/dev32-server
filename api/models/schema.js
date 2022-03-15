module.exports = function (name, body, u, p, c, db = "shop") {
    return `
const db = require("mongoose");

const path = "mongodb+srv://${u}:${p}@${c}/${db}?retryWrites=true&w=majority";

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = db.Schema(${body});
module.exports = db.model("${name}", Schema);
    `;
}