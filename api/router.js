/**
* @swagger
* /users/add:
*   post:
*     produces:
*       - application/json
*     parameters:
*       - name: login
*         in: formData
*         required: true
*         type: string
* */

/**
* @swagger
* /users/show:
*   get:
*     produces:
*       - application/json
*     tags:
*       - users
*     responses:
*        200:
*          description: hello world
* */


const router = require("express").Router();
// const {
//     getAllUsers,
//     getUser,
//     addUser,
//     updUser,
//     delUser
// } = require("./ctl/userCtl.js");

const {
    getAllModels,
    getModel,
    addModel,
    updModel,
    delModel
} = require("./ctl/modelCtl.js");

const { getAllTables, addTable } = require("./ctl/tableCtl.js");

// router.get("/users/show", getAllUsers);
// router.get("/users/alone/:login", getUser);
// router.post("/users/add", addUser);
// router.put("/users/upd/:login", updUser);
// router.delete("/users/del/:login", delUser);

router.get("/model/:name/show/all", getAllModels);
router.get("/model/:name/show/one/:id", getModel);
router.post("/model/:name/add", addModel);
router.put("/model/:name/upd/:id", updModel);
router.delete("/model/:name/del/:id", delModel);

router.get("/tables/show", getAllTables);
router.get("/tables/show/:db", getAllTables);
router.post("/tables/add/:db", addTable);

module.exports = router;