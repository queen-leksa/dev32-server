
const db = require("mongoose");

const path = "mongodb+srv://Vasya:Qwerty123@dev-server.hqkgn.mongodb.net/shop?retryWrites=true&w=majority";

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = db.Schema({"name":"string","breed":"string","age":"number","owner":"object"});
module.exports = db.model("pets", Schema);
    