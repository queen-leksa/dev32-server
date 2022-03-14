module.exports = function (name, body, u, p, db = "shop") {
    return `
const db = require("mongoose");

const path = "mongodb+srv://${u}:${p}@dev-server.hqkgn.mongodb.net/${db}?retryWrites=true&w=majority";

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = db.Schema(${body});
module.exports = db.model("${name}", Schema);
    `;
}