
const db = require("mongoose");

const path = "mongodb+srv://admin:1234@dev-server.hqkgn.mongodb.net/test?retryWrites=true&w=majority";

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = db.Schema({"rgb":"string","hex":"string","name":"string"});
module.exports = db.model("colors", Schema);
    