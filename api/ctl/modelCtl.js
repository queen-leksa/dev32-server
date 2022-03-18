/*
* router.get("/model/:name/show/all", getAllModels);
router.get("/model/:name/show/one/:id", getModel);
router.post("/model/:name/add", addModel);
router.put("/model/:name/upd/:id", updModel);
router.delete("/model/:name/del/:id", delModel);
* */

const getAllModels = async function (req, res) {}
const getModel = async function (req, res) {}
const addModel = async function (req, res) {
    // id = _id(mongo);
    const Schema = require(`../models/load/${req.params.name}.js`);
    await Schema(req.body).save();
    res.json({msg: "ok"});
}
const updModel = async function (req, res) {}
const delModel = async function (req, res) {}

module.exports = {
    getAllModels,
    getModel,
    addModel,
    updModel,
    delModel
}