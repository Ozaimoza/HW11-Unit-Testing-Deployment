const express = require("express");
const router = express.Router();
const Controller = require("../controllers/Controller");

router.get("/", Controller.home)

router.route("/todo")
    .get(Controller.showAllTodo)
    .post(Controller.createNewTodo)

router.route ('/todo/:id')
    .get(Controller.getTodoById)
    .put(Controller.updateTodo)
    .delete(Controller.deleteTodo)



module.exports = router