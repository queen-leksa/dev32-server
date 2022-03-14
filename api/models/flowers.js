
const db = require("mongoose");

const path = "mongodb+srv://Vasya:Qwerty123@dev-server.hqkgn.mongodb.net/shop?retryWrites=true&w=majority";

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Schema = db.Schema({"name":"string","color":"string","count":"number","price":"number"});
module.exports = db.model("flowers", Schema);
    