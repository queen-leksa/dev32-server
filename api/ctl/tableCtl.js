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

const getAllTables = async function(req, res) {
    let tables;
    if (req.params.db) {
        tables = await Tables.find({db: req.params.db}).select("-_id -__v");
    } else {
        tables = await Tables.find({}).select("-_id -__v");
    }
    fs.readdir("./api/models/load", function(err, files) {
        console.log(files);
        files = files.map(function(f) {
            let name = f.split(".");
            name.pop();
            return name.join(".");
        });
        console.log(files);
        tables.forEach(function(t) {
            if (!files.includes(t.name)) {
                console.log(`no file ${t.name}`);
                let body = {};
                t.fields.forEach(function(el) {
                    body[el.name] = el.type;
                });
                let text = NewSchema(t.name, JSON.stringify(body), dbUser, dbPwd, dbCluster, t.db);
                fs.writeFile(`./api/models/load/${t.name}.js`, text, function(err) {
                    if (!err) {
                        console.log(`create file ${t.name}`);
                    }
                });
            }
        });
    })
    res.json({msg: "ok", data: tables});
}

module.exports = {addTable, getAllTables};
