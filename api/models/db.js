const db = require("mongoose");
const {dbUser, dbPwd, dbCluster} = require("../env.js");

const dbName = "primary";
const path = `mongodb+srv://${dbUser}:${dbPwd}@${dbCluster}/${dbName}?retryWrites=true&w=majority`;

db.connect(path, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = db;