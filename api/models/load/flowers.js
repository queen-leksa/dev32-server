
const db = require("mongoose");

const path = "mongodb+srv://admin:1234@dev-server.hqkgn.mongodb.net/test?retryWrites=true&w=majority";

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = db.Schema({"name":"string","color":"string","count":"number"});
module.exports = db.model("flowers", Schema);
    