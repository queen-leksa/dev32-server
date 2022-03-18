const getUsers = require("../models/users.js");

const getAllUsers = async (req, res) => {
    const Users = getUsers();
    try {
        const result = await Users.find({});
        res.json({msg: "ok", data: result});
    } catch(err) {
        res.json({msg: err});
    }
};
const getUser = async (req, res) => {
    const Users = getUsers();
    try {
        const result = await Users.findOne({login: req.params.login});
        res.json({msg: "ok", data: result});
    } catch(err) {
        res.json({msg: err});
    }
};
const addUser = async (req, res) => {
    const Users = getUsers();
    try {
        await new Users(req.body).save();
        res.json({msg: "ok"});
    } catch(err) {
        res.json({msg: err});
    }
};
const updUser = async (req, res) => {
    const Users = getUsers();
    try {
        await Users.updateOne({login: req.params.login}, {$set: req.body});
        res.json({msg: "ok"});
    } catch(err) {
        res.json({msg: err});
    }
};
const delUser = async (req, res) => {
    const Users = getUsers();
    try {
        await Users.deleteOne({login: req.params.login});
        res.json({msg: "ok"});
    } catch(err) {
        res.json({msg: err});
    }
};

module.exports = {
    getAllUsers,
    getUser,
    addUser,
    updUser,
    delUser
};