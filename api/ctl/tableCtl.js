const fs = require("fs");
const Tables = require("../models/tables.js");
const NewSchema = require("../models/schema.js");
const {dbUser, dbPwd, dbCluster} = require("../env.js");

const getName = function(text) {
    if (text[text.length - 1] !== "s") {
        text += "s";
    }
    return text.toLowerCase();
}

const addTable = async function(req, res) {
    let tableName = getName(req.body.name);
    req.body.name = getName(req.body.name);
    let tableBody = {};
    req.body.fields.forEach(function(field) {
        tableBody[field.name] = field.type;
    });
    fs.writeFile(`./api/models/load/${tableName}.js`,
                 NewSchema(tableName, JSON.stringify(tableBody), dbUser, dbPwd, dbCluster, req.params.db),
                 async function(err) {
                    if (!err) {
                        req.body.db = req.params.db;
                        let row = await Tables.findOne({name: tableName});
                        if (row) {
                            await Tables.updateOne({name: tableName}, {$set: req.body});
                        } else {
                            await new Tables(req.body).save();
                        }
                        res.json({msg: "ok"});
                    }
                 });
}

const getAllTables = function(req, res) {

}

module.exports = {addTable, getAllTables};
