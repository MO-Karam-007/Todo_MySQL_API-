var express = require('express');
var router = express.Router();
const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = require('../services/factory')

// Routes
router.route('/')
  .get(getTodos)
  .post(createTodo);

router.route('/:id')
  .get(getTodo)
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;
