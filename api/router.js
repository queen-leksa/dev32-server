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
const {
    getAllUsers,
    getUser,
    addUser,
    updUser,
    delUser
} = require("./controllers.js");


router.get("/users/show", getAllUsers);
router.get("/users/alone/:login", getUser);
router.post("/users/add", addUser);
router.put("/users/upd/:login", updUser);
router.delete("/users/del/:login", delUser);

module.exports = router;