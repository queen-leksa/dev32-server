const db = require("mongoose");

const user = "Vasya";
const pwd = "Qwerty123";
const dbName = "shop";
const path = `mongodb+srv://${user}:${pwd}@dev-server.hqkgn.mongodb.net/${dbName}?retryWrites=true&w=majority`;

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = db;